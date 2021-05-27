import React, { Component } from 'react';
import { Image, StyleSheet, View, Text, Platform } from 'react-native';

export default class Profile extends Component {
  render() {
    return(
      <View style={styles.container}>
        <View style={styles.cardContainer}> 
          <View style={styles.cardImageContainer}>
            <Image style={styles.cardImage} source={require("./user.png")}/>
          </View>
          <View>
            <Text style={styles.cardName}>John Doe</Text>
          </View>
          <View style={styles.cardOccupationContainer}>
            <Text style={styles.cardOccupation}>React Native Developer</Text>
          </View>
          <View>
            <Text style={styles.cardDescription}>
              John is a really great JavaScript developer. He loves using JS to build React Native applications for IOS and Android.
            </Text>
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
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 3,
    borderStyle: 'solid',
    borderRadius: 20,
    backgroundColor: profileCardColor,
    width: 300,
    height: 400
  },
  cardImageContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 30,
    paddingTop: 15
  },
  cardImage: {
    width: 80,
    height: 80
  },
  cardName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 30,
    textShadowRadius: 3,
    ...Platform.select({
      ios: {
        fontFamily: 'American Typewriter'
      },
      android: {
        fontFamily: 'monospace',
        textShadowColor: 'red',
        textShadowOffset: {
          height: 2,
          width: 2
        },
      }
    })
  },
  cardOccupationContainer: {
    borderColor: 'black',
    borderWidth: 3,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0
  },
  cardOccupation: {
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10
  },
  cardDescription: {
    fontStyle: 'italic',
    marginTop: 10,
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 10
  }
});