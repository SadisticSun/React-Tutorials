import React, { Component } from 'react'
import { Button } from 'react-native'

const fetchLocation = props => {
    return (
        <Button title="Waar ben ik?" onPress={props.onGetLocation} />
    )
}

module.exports = fetchLocation