# 0528
## React Navigation
https://github.com/jinyedo/NaviApp

## expo cli
```
장점
- 배포의 용이성
- Android/X-code 가 없이 본인의 휴대폰으로 테스트 가능

단점
- java, kotlin, object-C, Swift 작성 불가, 이 언어의 원시 모듈 사용 불가
- 빌드 파일의 크기가 크다. (규모가 크고 기능이 맣은 앱 개발에 부적합)
- 블루투스 이용 불가

설치하기 : npm install -g expo-cli (-g 옵션은 global옵션이니 반드시 사용해야 한다.)
설치 확인: expo --version
프로젝트 만들기 : expo init "프로젝트명"
```

# 0521
## Platform에 따라 style 지정하기
```
// Platform import 하기
import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
    // Platform 으로 fontFamily 지정하기
    ...Platform.select({
      ios: {
        fontFamily: 'American Typewriter'
      },
      android: {
        fontFamily: 'monospace'
      }
    })
  },
```
---
# 0514
## border 속성 지정하기
```
컴포넌트 주위에 테두리를 더하는 것이 화면의 요소들을 구체적이며 실제로 느낄 수 있는 가장 확실항 방법이다.
다수의 border 속성들이 있지만, 개념으로 보면 4개의 속성이 있다. 이 속성들은 컴포넌트 전체에 적용된다.

1. borderColor & 2. borderWidth(각 측면 테두리에 각각의 속성을 적용) ]
- border"위치"Color ex)borderTopColor
- border"위치"Width ex)borderTopWidth

3. borderRadius(각 모서리에 적용) 


4. borderStyle(모든 모서리에 공통적으로 하나만 적용) 


- borderWidth 속성만 지정하면 기본적으로 아래 속성으로 지정된다.
  - borderColor : 'black'
  - borderStyle : 'solid'

- borderWidth 와 borderColor가 컴포넌트 범위에 지정되면
  => borderWidthLeft와 같이 좀 더 세부적으로 오버라이드애서 사용할 수 있다.

- 스타일에서는 세부적인 속성이 일반적인 속성보다 우선순위가 높다.

[ 참고 - borderStyle 속성은 'solid' 를 추천 ]
borderStyle 속성값을 'dotted' or 'dashed' 로 지정하고 각 측면의 테두리 폭을 변경하면 오류가 발생한다.
```

## Border Example
```
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Border extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Example style={{borderWidth: 1}}>
                    <Text>borderWidth: 1</Text>
                </Example>
                <Example style={{borderWidth: 3, borderLeftWidth: 0}}>
                    <Text>borderWidth: 3, borderLeftWidth: 0</Text>
                </Example>
                <Example style={{borderWidth: 3, borderLeftColor: 'red'}}>
                    <Text>borderWidth: 3, borderLeftColor: 'red'</Text>
                </Example>
                <Example style={{borderLeftWidth: 3}}>
                    <Text>borderLeftWidth: 3</Text>
                </Example>
                <Example style={{borderWidth: 1, borderStyle: 'dashed'}}>
                    <Text>borderWidth: 1, borderStyle: 'dashed'</Text>
                </Example>
            </View>
        );
    }
}

const Example = (props) => (
    <View style={[styles.example, props.style]}>
        {props.children}
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'   
    },
    example: {
        marginBottom: 15
    }
});

export default Border;
```
## borderRadius를 이용해서 테두리를 둥글게 만들기
```
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class BorderRadius extends Component {

    render() {
        return(
            <View style={styles.container}>
                // ex1) 네 곳의 모서리가 둥근 사각형
                <Example style={{borderRadius: 20}}>
                    <CenteredText>
                        <Text>Example 1:{"\n"}4 Rounded Corners</Text>
                    </CenteredText>
                </Example>

                // ex2) 오른쪽 두 모서리가 둥근 사각형
                <Example style={{borderTopRightRadius: 60, borderBottomRightRadius: 60}}>
                    <CenteredText>
                        <Text>Example 2:{"\n"}D Shape</Text>
                    </CenteredText>
                </Example>

                // ex3) 양 반대 편의 모서리가 둥근 사각형
                <Example style={{borderTopLeftRadius: 30, borderBottomRightRadius: 30}}>
                    <CenteredText>
                        <Text>Example 3:{"\n"}Leaf Shape</Text>
                    </CenteredText>
                </Example>

                // ex4) border radius가 각 측면의 길이의 반으로 지정된 사각형
                <Example style={{borderRadius: 60}}>
                    <CenteredText>
                        <Text>Example 4:{"\n"}Circle Shape</Text>
                    </CenteredText>
                </Example>
            </View>
        )
    }
}

const Example = (props) => (
    <View style={[styles.example, props.style]}>{props.children}</View>
)

const CenteredText = (props) => ( // 중앙 정렬된 엘리먼트(text element)를 렌더링하는 재사용 가능한 컴포넌트
    <Text style={[styles.centeredText, props.style]}>{props.children}</Text>
)

const styles = StyleSheet.create({
    container: { // React Native는 flex를 사용하여 레이아웃을 제어
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',   
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 75
    },
    example: {
        width: 120,
        height: 120,
        marginLeft: 20,
        marginBottom: 20,
        backgroundColor: 'grey',
        borderWidth: 2,
        justifyContent: 'center'
    },
    centeredText: { // 텍스트 엘리먼트 내의 텍스트를 중앙 정렬하는 스타일
        textAlign: 'center',
        margin: 10
    }
});

export default BorderRadius;
----------------------------------
- 기본적으로 Text 컴포넌트는 부모 컴포넌트의 배경색을 상속한다. 
- Text 컴포넌트의 bounding box(기본적인 영역)는 사각형이기 때문에 배경이 둥근 테두리와 겹치게 된다. 
- margin 속성을 이용해서 이 문제를 해결할 수도 있지만
- centerText 스타일에 backgroundColor: 'transparent'를 추가해 이 문제를 해결할 수도 있다. 
```

## 프로필 카드에 border 속성 적용하기
```
import React, { Component } from 'react';
import { Image, StyleSheet, View } from 'react-native';

export default class Profile extends Component {
  render() {
    return(
      <View style={styles.container}>
        <View style={styles.cardContainer}> 
          <View style={styles.cardImageContainer}>
            <Image style={styles.cardImage} source={require("./user.png")}/>
          </View>
        </View>
      </View>
    );
  }
}

// 여러 곳에서 사용할 경우를 대비해서 프로필카드의 색상을 변수에 정의함
const profileCardColor = 'dodgerblue';

const styles = StyleSheet.create({
  // 가장 바깥쪽 컴포넌트가 사용할 스타일
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  // 프로필 카드에 사용할 스타일
  cardContainer: {
    // 프로필 카드에 border 속성 추가하기
    borderColor: 'black',
    borderWidth: 3,
    borderStyle: 'solid',
    borderRadius: 20,
    backgroundColor: profileCardColor,
    width: 300,
    height: 400
  },
  // 이미지 컨테이너는 120 x 120 크기의 정사각형 borderRadius 속성을 60(120의 반)으로 지정해서 원으로 나타남
  cardImageContainer: {
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
    width: 120,
    height: 120,
    borderRadius: 60
  },
  // 이미지에 적용한 스타일
  cardImage: {
    width: 80,
    height: 80
  }
});
```
## margin과 padding 지정하기
```
margin 스타일을 이용해서 각 컴포넌트 사이의 위치를 상대적으로 정의할 수 있다.
padding 스타일을 이용하면 컴포넌트의 테두리로부터 컴포넌트의 상대 위치를 지정할 수 있다.
```
---
# 0507
## 중간 평가에서 주목해야 할 부분
```
1. Class 형태의 component의 선언방법
2. 함수 형태의 component의 선언방법
3. state 설정 및 초기화 방법
4. props의 개념 및 전달 경로
5. state에 초기화된 값을 props로 전달하는 방법
6. 일반 변수로 초기화 된 값을 props로 전달하는 방법
7. 구조분해(비구조화) 할당(Destructuring Assignment)을 통한 변수명 재할당
8. 필요한 component만 import하기
9. props를 전달받아 사용하기
10. index.js에서 App지정하기
```

## 구조 분해 할당
```
배열이나 객체의 속성을 해체하여, 그 값을 개별 변수에 담을 수 있게 하는 JavaScript 표현식이다.

[ 객체에서 변수를 재할당하는 방법 ]
const foobar = {
    foo: 1000,
    bar: 500
}
// foobar에 있는 foo property를 woo로 바꾸고 싶을 때

1. 구조분해 할당 없이 변수명 재할당
const woo = foobar.foo

2. 구조분해 할당을 이용하는 방법
const {foo:woo} = foobar;
console.log(woo) // 1000
console.log(foobar) // let basket = {foo:1000, bar:500}

3. React에서 자주 사용되는 구조분해 할당
this.state = {
  foo: 100,
  bar: 200
}
const {foo, bar} = this.state // 추후에 foo 나 bar로 사용 가능

-------------------------------------------------------------

let o = {p:42, q:true};
var {p: foo, q: bar} = o;
console.log(foo); // 42
console.log(bar); // true
```

## 지원되는 컬러의 지정 형식
```
1. #rgb | #tgba | #rrggbb | #rrggbbaa

2. rgb(숫자, 숫자, 숫자) | rgba(숫자, 숫자, 숫자, 알파값)

3. hsl(색상, 채도, 명도) = 'hsl(216, 100%, 50%) | hsla(색상, 채도, 명도, 알파값) = 'hsla(216, 100%, 50%, 5)'

4. 투명 배경 = 'transparent'

5. CSS3 지정 색 이름(black, red, blue 등) = 'dodgerblue'


- rgb는 빨간색 ,녹색, 파란색을 의미 
- alpha는 투명도와 유사하다(0은 투명, 1은 선명)
- hue은 360도로 구성된 색상환(color wheel)의 1도를 의미한다. 0은 빨강새그 120은 녹색, 240은 파란색
- saturation은 색상의 강도이며 회색 음영인 0%에서 100%까지 사용할 수 있다.
- lightness는 0%에서 100%까지의 값으로 0%는 검은색에 가까운 어두운색이고 100%는 흰색에 가까운 밝은색이다.

```
---
# 0430
## 스타일 적용 방법
```
1. [ 인라인 스타일 ]

  <View style={{marginLeft: 20, marginTop: 20}}>
    <Text style={{fontSize: 18, Color: 'red'}}>Some Text</Text>
  </View>


2. [ StyleSheet에 정의된 스타일 ]

  <View style={styles.container}></View>
 
  const styles = StyleSheet.reate({
    container: {
      marginLeft: 20,
      marginTop: 20
    }
  })

- 코드베이스(codebase)만 분리해서 관리

- 다른 컴포넌트에서 재사용할 수도 있다.

- 개발 할 때 스타일 변경이 쉽다.

- container같이 스타일 이름을 사용하면 메시지의 의도를 파악하기 쉽다. ex)warning = 경고창 

- 배열로 스타일을 지정할수 있지만 중복된 property가 있을 때, 마지막으로 전달된 스타일이 이전 스타일을 재정의한다.
  ex) style = {[{color: 'black'},{color: 'yellow'}, {color: 'red}]} // 빨강색이 사용됨

- 다음과 같이 인라인 스타일과 스타일 시트를 동시에 사용하도록 배열로 지정하는 것도 가능하다
  ex) style = {[{color: 'black'}, styles.message]}
```

## 스타일 구성하기
```
- 웹에서는 스타일은 모든 페이지에 적용될 수 있지만 리액트 네이티브는 그렇지 않다

- 리액트 네이티브는 컴포넌트를 가능한 재사용 가능하고 독립적으로 만드는 것을 목표로 하기 떄문에 스타일을 범위 전체앱이 아니라 컴포넌트에 적용한다. 

- 이런 앱의 캡슐화는 개인에 따라 달라지지만 일반적으루 두 가지 방법을 사용한다.
  ● 컴포넌트 내에 스타일시트 선언하기
  ● 컴포넌트 파일과는 별도의 스타일 시트 선언하기

[ 컴포넌트 내에 스타일시트 선언하기 ]
- 하나의 파일에 컴포넌트와 컴포넌트가 사용할 스타일을 환전히 캠슐화할 수 있다는 장점이 있다.
- 이렇게 캡슐화된 컴포넌트는 앱 내에서 자유롭게 이동해서 사용할 수 있다.

[ 컴포넌트 파일과는 별도로 스타일 시트 선언하기 ]
- 스타일 시트 정의가 별도의 파일에서 만들어진다. 
- 파일명은 임의로 지정할 수 있다.(전형적인 이름은 styles.js) 확장자는 반드시 .js여야 한다.
- 이 방법에서는 스타일시트와 컴포넌트 파일을 같은 폴더 내에 저장한다. 
  < MYREACTPROJECT 폴더 >
    - COMPONENTS 폴더
      - COMPONENTA 폴더
        - conponenta.js
        - styles.js
      - COMPONENTB 폴더
        - componentb.js
        - styles.js

[ 외부 스타일 시트 사용하기 ]
- styles.js
import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
  conatiner : {
    maringTop: 150,
    backgroudColor: '#ededed',
    flexWrap: 'wrap'
  }
})

- componenta.js
import { styles } from './styles'
<View style={styles.container}></View> // styles.js 파일에 정의된 styles.container 스타일 참조

```
## View 컴포넌트란
```
View 컴포넌트는 다른 요소를 감싸고 View 컴포넌트 내에 UI 코드 블록을 만들 수 있다는 점에서 HTML의 div 태그와 유사하다.
```

## bind() 
```
bind() 메소드가 호출되면 새로운 함수를 생성합니다.
받게되는 첫 인자의 value로는 this 키워드를 설정하고, 이어지는 인자들은 바인드된 함수의 인수에 제공됩니다.


객체 메서드가 객체 내부가 아닌 다른 곳에 전달되어 호출되면 this가 사라집니다.
let user = {
  firstName: "John",
  sayHi() {
    console.log(`Hello, ${this.firstName}!`);
  }
};

(1) this가 사라져 찾을 수 없음
setTimeout(user.sayHi, 1000); // Hello, undefined!

(2) bind()를 통해 가져온다.
let name = user.sayHi.bind(user)
setTimeout(name, 1000); // Hello, John!

```

## 비구조화 할당
```
배열 [], 혹은 객체 {} 안의 값을 편하게 꺼내 쓸 수 있는 문법

(1)
[a1, a2, ...rest_a] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(a1); // 1
console.log(a2); // 2
console.log(rest_a); // [3, 4, 5, 6, 7, 8, 9]

(2)
var { a1, a2, ...rest_a } = { a1 : 10, a2 : 20, a3 : 30, a4 : 40 };
console.log(a1); // 10
console.log(a2); // 20
console.log(rest_a); // { a3: 30, a4: 40 }
```

---
# 0416
```
내용 없음
```

---
# 0409
## ScrollView 컴포넌트
```
ScrollView 플랫폼을 감싸는 것으로 스크롤이 가능한 View 컴포넌트이다.

[속성]
keyboardShouldPersistTaps : always = 키보드가 열려 있으면 닫아서 UI 가 onPress 이벤트를 모두 처리하게 한다.

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


