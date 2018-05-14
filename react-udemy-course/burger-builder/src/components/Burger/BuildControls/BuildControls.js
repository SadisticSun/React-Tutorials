import React from 'react'
import { BuildControl } from './BuildControl/BuildControl';
import classes from './BuildControls.css';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
];

export const BuildControls = props => {
   return (
        <div className={classes.BuildControls}>
            <h3>Current Price: <strong>€{props.price.toFixed(2)}</strong></h3>
            { controls.map(ctrl => {
                return <BuildControl 
                    key={ctrl.label} 
                    label={ctrl.label} 
                    added={() => props.ingredientAdded(ctrl.type)}
                    removed={() => props.ingredientRemoved(ctrl.type)}
                    disabled={props.disabledInfo[ctrl.type]} />
            })}
        </div>
   )
};
