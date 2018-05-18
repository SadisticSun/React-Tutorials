import React, {Component } from 'react';
import { Aux } from '../../hoc/Auxiliary';
import { withErrorHandler } from '../../hoc/ErrorHandler';
import Burger from '../../components/Burger/Burger'
import { BuildControls } from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import { OrderSummary } from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios.config';
import Spinner from '../../components/UI/Spinner/Spinner';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

class BurgerBuilder extends Component {
    state = {
        ingredients: null,
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false,
        error: false
    }

    componentDidMount() {
        const url = 'https://burger-builder-bd02c.firebaseio.com/ingredients.json'
        axios.get(url)
            .then(res => {
                this.setState({
                    ingredients: res.data
                })
            })
            .catch(err => this.setState({error: true}))
    }

    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients)
            .map(ingredient => ingredients[ingredient])
            .reduce((sum, el) => sum + el, 0);

        this.setState({purchasable: sum > 0})
    }

    addIngredient = type => {
        const oldCount              = this.state.ingredients[type];
        const updatedCount          = oldCount + 1;
        const updatedIngredients    = {
            ...this.state.ingredients
        };
        updatedIngredients[type]    = updatedCount;
        const priceAddition         = INGREDIENT_PRICES[type];
        const oldPrice              = this.state.totalPrice;
        const newPrice              = oldPrice + priceAddition;
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        });
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredient = type => {
        const oldCount              = this.state.ingredients[type];
        if (oldCount <= 0)
            return;
        const updatedCount          = oldCount - 1;
        const updatedIngredients    = {
            ...this.state.ingredients
        };
        updatedIngredients[type]    = updatedCount;
        const priceDeduction        = INGREDIENT_PRICES[type];
        const oldPrice              = this.state.totalPrice;
        const newPrice              = oldPrice - priceDeduction;
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        });
        this.updatePurchaseState(updatedIngredients);
    }

    purchaseHandler = () => {
        this.setState({
            purchasing: true
        })
    }

    closeModal = () => {
        this.setState({
            purchasing: false
        })
    }

    continuePurchase = () => {
        this.setState({loading: true})
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Tristan Jacobs',
                address: {
                    street: 'test_street',
                    houseNr: "14C",
                    zipCode: '1961GB',
                    country: 'NL'
                },
                email: 'test@test.com',
                deliveryMethod: 'express'
            }
        };

        axios.post('/orders.json', order)
            .then(res => {
                this.setState({loading: false, purchasing: false})
            })
            .catch(error => {
                this.setState({loading: false, purchasing: false})
                console.error(error)
            })
    }

    render() {
        const disableInfo = {
            ...this.state.ingredients
        };

        for (let key in disableInfo) {
            disableInfo[key] = disableInfo[key] <= 0;
        };

        let burger = this.state.error ? <p>Unable to load ingredients.</p> : <Spinner />;
        let orderSummary = null;

        if (this.state.ingredients) {
            burger = (
                <Aux>
                    <Burger ingredients={this.state.ingredients} />
                    <BuildControls 
                        ingredientAdded={this.addIngredient}
                        ingredientRemoved={this.removeIngredient}
                        disabledInfo={disableInfo}
                        price={this.state.totalPrice}
                        purchasable={this.state.purchasable}
                        ordered={this.purchaseHandler} />
                </Aux>
            );
            orderSummary = <OrderSummary 
                ingredients={this.state.ingredients}
                purchaseCancelled={this.closeModal}
                purchaseContinued={this.continuePurchase}
                totalPrice={this.state.totalPrice} />;
        };

        if (this.state.loading) {
            orderSummary = <Spinner />
        };

        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.closeModal}>
                   { orderSummary }
                </Modal>
                { burger }
            </Aux>
        );
    }
};

export default withErrorHandler(BurgerBuilder, axios);