import React, { Component } from 'react';
import { Aux } from '../../hoc/Auxiliary';
import { Toolbar } from '../Navigation/Toolbar/Toolbar';
import { SideDrawer } from '../Navigation/SideDrawer/SideDrawer';

import classes from './Layout.css'; 

export default class Layout extends Component {    
    state = {
        showDrawer: false
    }

    sideDrawerCloseHandler = () => {
        this.setState({showDrawer: false})
    }

    sideDrawerToggleHandler = () => {
        this.setState(previousState => (
            { showDrawer: !previousState.showDrawer }
        ))
    }

    render() {
      return (
        <Aux>
            <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
            <SideDrawer 
                closed={this.sideDrawerCloseHandler} 
                opened={this.state.showDrawer} />
            <main className={classes.Content}>
                {this.props.children}
            </main>
        </Aux>
      )
    }
   
};