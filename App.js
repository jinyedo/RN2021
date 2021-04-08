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

// 2-15 static getDerivedStateFromProps
class App extends React.Component {
  constructor() {
    super();
    this.state = {loading: true, data: {}};
  }

  componentDidMount() {
    //ajax call
    setTimeout(() => {
      this.setState({
        loading: false,
        data: {name: 'Nader Dabit', age: 35},
      });
    }, 2000);
  }
  render() {
    if (this.state.loading) {
      return <Text>Loading</Text>;
    }
    const {name, age} = this.state.data;
    return (
      <View>
        <Text>Name : {name}</Text>
        <Text>Age : {age}</Text>
      </View>
    );
  }
}

export default App;
