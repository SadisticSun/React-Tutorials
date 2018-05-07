import React, { Component } from 'react'

export default class Weather extends Component {
    render() {
        return (
            <div>
                { this.props.city && <p>City: {this.props.city}</p> }
                { this.props.country && <p>Country: {this.props.country}</p> }
                { this.props.temperature && <p>Temperature: {this.props.temperature} ℃</p> }
                { this.props.description && <p>Description: {this.props.description}</p>}
            </div>
        )
    }
}
