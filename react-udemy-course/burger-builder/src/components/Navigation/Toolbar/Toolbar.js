import React from 'react';
import classes from './Toolbar.css';
import { Logo } from '../../Logo/Logo';
import { NavList } from '../../Navigation/NavList/NavList';
import { DrawerToggle } from '../SideDrawer/DrawerToggle/DrawerToggle';

export const Toolbar = props => {
   return  (
        <header className={classes.Toolbar}>
            <DrawerToggle clicked={props.drawerToggleClicked} />
            <div className={classes.Logo}>
                <Logo/>
            </div>
            <nav className={classes.DesktopOnly}>
                <NavList />
            </nav>
        </header>
   )
};