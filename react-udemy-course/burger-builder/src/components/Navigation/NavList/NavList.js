import React from 'react';
import { NavItem } from './NavItem';
import classes from './NavList.css';

export const NavList = props => {
  return (
    <ul className={classes.NavList}>
        <NavItem link="/" active>Burger Builder</NavItem>
        <NavItem link="/">Checkout</NavItem>
    </ul>
  )
};
