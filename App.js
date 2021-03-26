// [ 예제 2.6 정적 props ]

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
  
  render() {
    let book = "React Native in Action"
    return <BookDisplay book={ book } />
  }
}

class BookDisplay extends React.Component {
  render() {
    return(
      <View>
        <Text> { this.props.book }</Text>
      </View>
    )
  }

}

export default App;
