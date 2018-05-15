import React from 'react';
import burgerLogo from '../../assets/img/burger-logo.png';
import classes from './Logo.css';

export const Logo = props => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={burgerLogo} alt="My Burger" />
    </div>
);
