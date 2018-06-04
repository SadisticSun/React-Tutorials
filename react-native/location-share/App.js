import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, NavigatorIOS } from 'react-native'
import FetchLocation from './components/FetchLocation'
import LocationDetails from './components/LocationDetails'

class HomeScreen extends React.Component {
  state = {
    userLocation: null
  }

  onGetLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        userLocation: position
      })
    })
  }

  getLocationDetails = () => {
    if (this.state.userLocation) {
      return <LocationDetails
        longitude={this.state.userLocation.coords.longitude}
        latitude={this.state.userLocation.coords.latitude}
      />
    }
  }

  render() {
    return (
      <NavigatorIOS initialRoute={{

      }} >
        <View style={styles.container}>
          <Text style={styles.header_1}>Hoi ik ben een native app!</Text>
          <Image source={require('./img/r.png')} />
          <FetchLocation onGetLocation={this.onGetLocation} />
          { this.getLocationDetails() }
        </View>
      </NavigatorIOS>
      
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: HomeScreen,
          title: 'Homescreen',
        }}
        style={{flex: 1}}
      />
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header_1: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});

module.exports = [App, HomeScreen]