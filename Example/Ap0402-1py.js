// props와 state를 비구조화하기
class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      book: 'React Native in Action'
    }
  }

  updateBook() {
    this.setState({
      book: 'Express in Action'
    })
  }

  render() {
    const  { book } = this.state
    return (
      <BookDisplay updateBook={ () => this.updateBook() } book={ book } />
      )
  }
}

class BookDisplay extends React.Component {
  render() {
    return(
      <View>
        <Text onPress={ this.props.updateBook }> { this.props.book }</Text>
      </View>
    )
  }

}
