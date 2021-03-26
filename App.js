/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      year: 23,
      leapYear: true,
      name: "Jin Ye Do",
      colors: ['blue'],
      topics: ['React', 'React Native', 'JavaScript'],
      info: {
        paperback: true,
        length: '335 pages',
        type: 'programming'
      }
    }
  }

  updateYear() {
    this.setState({
      year: 24
    })
  }

  render() {
    let leapyear = <Text>This is not a leapYear!</Text>
    if (this.state.leapYear) {
      leapyear = <Text>THis is a leapYear!</Text>
    }
    return(
      <View>
        <Text>My Name is: { this.state.name }</Text>
        <Text onPress={() => this.updateYear()}>
          My year is: { this.state.year }
        </Text>
        <Text>My color are: { this.state.colors[0] }</Text>
        <Text>Topics: { this.state.topics[0] }</Text>
        <Text>Length: { this.state.info.length }</Text>
        <Text>Type: { this.state.info.type }</Text>
        { leapyear }
      </View>
    )
  }
}

export default App;
