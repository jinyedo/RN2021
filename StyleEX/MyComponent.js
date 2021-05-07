import React, { Component } from 'react';
import { BackHandler, Button, StyleSheet, View } from 'react-native';
// 외부로부터 분리해둔 getStylesSheet 함수 가져오기
import getStyleSheet from './MyConponentStyles';

export default class MyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // 기본 테마 색을 밝은색으로 컴포넌트의 state 초기화하기 
            darkTheme: false
        }
        // 예외가 발생하지 않도록 toggleTheme 함수를 컴포넌트에 bind
        this.toggleTheme = this.toggleTheme.bind(this);
    }

    // 호출할때마다 스타일 toggle
    toggleTheme() {
        this.setState({
            darkTheme: !this.state.darkTheme
        })
    }

    render() {
        // 표시할 테마에 적합한 스타일시트를 가져오기 위해 getStylesSheet함수 사용 
        const styles = getStyleSheet(this.state.darkTheme);
        // backgroundColor를 쉽게 사용할려면 StylesSHeet의 flatten을 이용해서 StylesSheet 객체를 JavaScript 객체로 변환
        const backgroundColor = StyleSheet.flatten(styles.container).backgroundColor;

        return(
            <View style={styles.container}> 
                <View style={styles.box}>
                    <Button title={backgroundColor} onPress={this.toggleTheme} />
                </View>
            </View>
        )
    }
}