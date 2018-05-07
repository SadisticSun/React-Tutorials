import React from 'react'

const Weather = props => (
    <div className="weather__info">
        { props.city && <p className="text-light">City: <span className="weather__key">{props.city}</span></p> }
        { props.country && <p className="text-light">Country: <span className="weather__key">{props.country}</span></p> }
        { props.temperature && <p className="text-light">Temperature: <span className="weather__key">{props.temperature} ℃ </span></p> }
        { props.description && <p className="text-light text-capitalize">Description: <span className="weather__key">{props.description} </span></p> }
        { props.error && <div className="alert alert-danger" role="alert">{props.error}</div> }
    </div>
);

export default Weather;
