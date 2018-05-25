import React, { Component } from "react";
import { Button } from '../../../components/UI/Button/Button';
import classes from './ContactData.css'

export default class ContactData extends Component {
    state = {
        name: "",
        email: "",
        address: {
            street: "",
            zipCode: ""
        }
    };
    render() {
        return (
            <div className={classes.ContactData}>
                <h4>Enter your contact information</h4>
                <form>
                    <input type="text" name="name" placeholder="Your name" />
                    <input type="email" name="email" placeholder="Your email" />
                    <input type="text" name="street" placeholder="Street" />
                    <input type="text" name="zip_code" placeholder="Zip Code" />
                    <Button btnType="Success">ORDER</Button>
                </form>
            </div>
        );
    }
}
