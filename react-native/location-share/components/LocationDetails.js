import React, { Component } from 'react'
import { Text, View } from 'react-native'

const locationDetails = props => {
    return (
        <View>
            <Text>Longitude: { props.longitude }</Text>
            <Text>Latitude: { props.latitude }</Text>
        </View>
    )
}

export default locationDetails