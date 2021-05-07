import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class Profile extends Component {
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.cardContainer} />
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
        backgroundColor: profileCardColor,
        width: 300,
        height: 400
    }
});