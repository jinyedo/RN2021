import React from 'react';
// ScrollView 스크롤이 가능한 View 컴포넌트
import { View, ScrollView, StyleSheet } from 'react-native'
class App extends Component {
  render() {
    return(
      <View style={style.container}>
        {/* keyboardShouldPersistTaps='always' - 키보드가 열려있으면 닫아서 UI가 onPress 이벤트를 모두 처리 */}
        {/* <View> 와 <ScrollView> 모두 flex: 1 이 적용되어 있는데 이는 하위 컴포넌트<ScrollView>가 상위 컴포넌트<View> 영역을 모두 채우도록 해준다.*/}
        <ScrollView keyboardShouldPersistTaps='always' style={style.content}></ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containser : {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  content: {
    flex: 1,
    paddingTop: 60
  }
})

export default App;
