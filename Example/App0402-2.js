// 2-14 props로 다른 데이터 타입을 전달하기
class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      leapYear: true,
      info: {
        type: 'programming'
      }
    }
  }

  render() {
    return (
      <BookDisplay 
        leapYear={ this.state.leapYear }
        info={ this.state.info }
        topics={['React', 'React Native', 'JavaScript']} /> 
      )
  }
}

const BookDisplay = (props) => {
  let leapYear
  let { topics } = props
  const { info } = props
  topics = topics.map((topic, i) => {
    return <Text>{ topics }</Text>
  })
  if (props.leapYear) {
    leapYear = <Text>This is a leapyear!</Text>
  }

  return(
    <View>
      { leapYear }
      <Text>Book type : { info.type }</Text>
      { topics }
    </View>
  )
}
