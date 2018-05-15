import React, { Component } from 'react';
import './App.css';

// Components

import {UserInput} from './components/UserInput';
import {UserOutput} from './components/UserOutput';

class App extends Component {

  state = {
    userName: 'Tristan'
  }

  changeUserName = (event) => {
    const value = event.target.value;
    this.setState({
      userName: value
    })
  }

  render() {
    return (
      <div className="App">
        <UserOutput username={this.state.userName} value={this.state.userName} />
        <UserInput onChange={this.changeUserName} value={this.state.userName}/>
      </div>
    );
  }
}

export default App;
