import React, { Component } from 'react';
import './App.css';

import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';


const API_KEY = 'f09f5e9c76ea544df332392ec75d4d1b';
const API_BASEURL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric`;


export default class App extends Component {
  state = {
    countryName: undefined,
    cityName: undefined,
    temperature: undefined,
    description: undefined,
    error: undefined
  }

  buildQuery = (e) => {
    const country = e.target.elements.country.value || null;
    const city = e.target.elements.city.value || null;
    let query = '';

    if (country && city) {
      query = `${city},${country}`;
    } else if (country && !city) {
      query = `${country}`;
    } else if (!country && city) {
      query = `${city}`
    } else {
      console.error('Empty query');
      return false;
    }

    return query;
  }


  getWeather = async (e) => {
      e.preventDefault();

      const query = this.buildQuery(e);

      console.log(query)

      if (!query) {
        return this.setState({
          error: 'No city or country provided'
        })
      }

      const apiCall = await fetch(`${API_BASEURL}&q=${query}`);
      const data = await apiCall.json();

      console.log(data)

      this.setState({
        countryName: data.sys.country,
        cityName: data.name,
        description: data.weather[0].description,
        temperature: data.main.temp
      })
      console.log(data)
  }

  render() {
      return (
            <div className="App">
                <Titles />
                <Form getWeather={this.getWeather} />
                <Weather 
                  temperature={this.state.temperature} 
                  city={this.state.cityName}
                  country={this.state.countryName}
                  description={this.state.description}
                />
            </div>
        );
    }
}

