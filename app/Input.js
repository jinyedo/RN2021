import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native'

class Input extends Component {
    render() {
        return(
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.input}
                    placeholder='What needs to be done?'
                    placeholderTextColor='#CACACA'
                    selectionColor='#666666'/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        marginLeft: 20,
        marginRight: 20,
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowColor: '#000000',
        shadowOffset: { width:2, height: 2 }
    },
    input: {
        height: 60,
        backgroundColor: '#ffffff',
        paddingLeft: 10,
        paddingRight: 10
    }
})

export default Input;