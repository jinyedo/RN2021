// [ 예제 2.6 정적 props ]
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

