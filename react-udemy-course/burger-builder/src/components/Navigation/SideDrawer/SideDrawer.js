import React from 'react';
import classes from './SideDrawer.css';
import { Logo } from '../../Logo/Logo';
import { NavList } from '../NavList/NavList';
import { Backdrop } from '../../UI/Backdrop/Backdrop';
import { Aux } from '../../../hoc/Auxiliary';

export const SideDrawer = props => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.opened)
        attachedClasses = [classes.SideDrawer, classes.Open];

    return (
        <Aux>
            <Backdrop show={props.opened} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavList />
                </nav>
            </div>
        </Aux>
    )
};
