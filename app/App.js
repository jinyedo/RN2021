/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native'
import Heading from './Heading'
import Input from './Input'

class App extends Component {
  constructor() {
    super()
    this.state = {
      inputValue: '',
      todos: [],
      type: 'All'
    }
  }

  render() {
    return(
      <View style={styles.container}>
        {/* keyboardShouldPersistTaps='always' - 키보드가 열려있으면 닫아서 UI가 onPress 이벤트를 모두 처리 */}
        {/* <View> 와 <ScrollView> 모두 flex: 1 이 적용되어 있는데 이는 하위 컴포넌트<ScrollView>가 상위 컴포넌트<View> 영역을 모두 채우도록 해준다.*/}
        <ScrollView keyboardShouldPersistTaps='always' style={styles.content}>
          <Heading />
          <Input />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  content: {
    flex: 1,
    paddingTop: 60
  }
})

export default App;
