import React, { Component } from 'react';
import './App.css';

import {Validator} from './components/ValidationComponent';
import {Character} from './components/CharComponent';

class App extends Component {

  state = {
    text: '',
    textLength: 0
  }

  getTextLength = e => {
    this.setState({
      text: e.target.value,
      textLength: e.target.value.length
    })
  }

  deleteChar = index => {
    const text = this.state.text.split('');
    text.splice(index, 1);
    const newText = text.join('')
    this.setState({
      text: newText
    });
  }

  render() {
    const charList = this.state.text.split('').map((char, index) => {
      return <Character 
        value={char} 
        key={index}
        clicked={() => this.deleteChar(index)} /> 
    })

    return (
      <div className="App">
        <Validator textLength={this.state.textLength} />
        <input type="text" onChange={this.getTextLength} value={this.state.text} />
        {charList}
      </div>
    );
  }
}

export default App;
