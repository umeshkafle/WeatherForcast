/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {fetchWeather} from './utilities/weatherAPI';

export default class WeatherForcast extends Component {

  componentWillMount(){
    this.state = {hideStatusBar: false}

  }
  componentDidMount() {
    this.getLocation()
    fetchWeather(-21,28).then(res => console.log(res))
    setInterval(() => {
      this.setState({hiddenStatusBar:!this.state.hideStatusBar})
    }, 1000)
  }
  
  getLocation(){
    navigator.geolocation.getCurrentPosition(
      (posData) => console.log(posData),
      (error) => alert(JSON.stringify(error)),
      {timeout: 10000}
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden = {this.state.hiddenStatusBar}/>
        <View style={styles.header}>
          <Icon name={'ios-sunny'} size={40} color={'#FFD017'}/>
          <Text style={styles.temp} >20⁰</Text>
        </View>
        <View style={styles.body}>
          <Text>First Weather App</Text>
          <Text>Let's Make It Rain</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  header: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  temp: {
    fontFamily: 'HelveticaNeue-bold',
    fontSize: 35,
    color: '#d2691e'
  },
  body: {
    flex: 5,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    backgroundColor: '#deb887'
  }

});

AppRegistry.registerComponent('WeatherForcast', () => WeatherForcast);
