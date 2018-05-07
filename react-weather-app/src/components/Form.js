import React, { Component } from 'react'

export default class Form extends Component {
  render() {
    return (
      <div>
          <form onSubmit={this.props.getWeather} >
              <input type="text" name="city" placeholder="Enter a city..." />
              <input type="text" name="country" placeholder="Enter a country..." />
              <button type="submit">Get weather data</button>
          </form>
      </div>
    )
  }
}
