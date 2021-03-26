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
  
  state = {
    year: 23,
    name: "Jin Ye Do",
    colors: ['blue']
  }

  render() {
    return(
      <View>
        <Text>My Name is: {this.state.name}</Text>
        <Text>My year is: {this.state.year}</Text>
        <Text>My color is: {this.state.colors}</Text>
      </View>
    )
  }
}

export default App;
