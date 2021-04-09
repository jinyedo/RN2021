# 0326

### props 사용하기
```
[ props ]
- 외부 데이터
- 변경 불가
- 부모로 부터 상속
- 부모 컴포넌트가 변경
- props로 전달받을 수 있음
- 컴포넌트 내부에서 변경 불가능
- props는 동적 데이터이다.
- props는 컴포넌트의 인자(argument)로 넘어간다.
- 컴포넌트 사용시 props 속성을 모두 가져온다.
- props는 각각 고유한 값을 가져야한다.

```

### state 사용하기
```
[ state ]
- 내부데이터
- 변경가능
- 컴포넌트에서 생성
- 컴포넌트에서만 갱신
- props로 전달 받을 수 있음
- 컴포넌트 내부에서 변경 가능

1. "state"를 직접 변경할 수 없다: 원래 리엑트는 "state"가 변경되면 render()를 다시 실행하여 변경된 "state"를 화면에 보여주지만 "state"를 직접 변경하면 render() 함수를 다시 실행해 주지 않음

2. setState() 함수를 사용하면 "state"를 변경할 수 있고. 바뀐 "state"의 데이터만 업데이트한다.

ex)
  constructor() {
    super();
    this.state = {
      year: 23
    }
  }

  updateYear() {
    this.setState({year: 24})
  }
```

### onPress() : 클릭 이벤트 처리
```
ex) 클릭시 updateYear() 호출
<Text onPress={() => this.updateYear()}>
    My year is: {this.state.year}
</Text>
```

---

# 0402

### 컴포넌트 생명주기 - life cycle method
```
1. constructor() - 생성자 | 제일먼저 실행됨
2. componentDidMount() - render() 다음으로 실행
3. 실행순서: constructor() -> render() -> componentDidMount() 


componentDidMount - 컴포넌트가 로딩되고나서 바로 한 번만 호출된다.
componentDidUpdate() - 컴포넌트가 갱신되면서 재랜더링된 후에 바로 호출된다.
componentWillUnmount() - 컴포넌트가 파기되기 전에 호출된다.

static getDerivedStateFromProps 
- static 클래스 메서드로 컴포넌트가 생성될 때와 컴포넌트가 새 props를 전달받을 때 모두 호출된다.
- 새로운 props와 가장 최근의 state를 인수로 전달받아서 하나의 객체를 반환단다. 
- 객체의 데이터는 컴포넌트의 상태로 갱신된다.

shouldComponentUpdate - Boolean을 반환하며 컴포넌트의 랜더링을 할 것인지 경정할 수 있다.
```
---
# 0409

## ScrollView 컴포넌트
```
ScrollView 플랫폼을 감싸는 것으로 스크롤이 가능한 View 컴포넌트이다.

[속성]
keyboardShouldPersistTaps : always = 키보드가 열려 있으면 닫아서 UI 가 onPress 이벤트를 모두 처리하게 한다.

```