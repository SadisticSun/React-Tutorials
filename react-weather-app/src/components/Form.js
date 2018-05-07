import React from 'react';

const Form = props => (
    <form onSubmit={props.getWeather} >
        <input type="text" name="city" placeholder="Enter a city..." />
        <input type="text" name="country" placeholder="Enter a country..." />
        <button type="submit">Get weather data</button>
    </form>
);

export default Form;
