import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class BorderRadius extends Component {

    render() {
        return(
            <View style={styles.container}>
                <Example style={{borderRadius: 20}}>
                    <CenteredText>
                        <Text>Example 1:{"\n"}4 Rounded Corners</Text>
                    </CenteredText>
                </Example>
                <Example style={{borderTopRightRadius: 60, borderBottomRightRadius: 60}}>
                    <CenteredText>
                        <Text>Example 2:{"\n"}D Shape</Text>
                    </CenteredText>
                </Example>
                <Example style={{borderTopLeftRadius: 30, borderBottomRightRadius: 30}}>
                    <CenteredText>
                        <Text>Example 3:{"\n"}Leaf Shape</Text>
                    </CenteredText>
                </Example>
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

const CenteredText = (props) => (
    <Text style={[styles.centeredText, props.style]}>{props.children}</Text>
)

const styles = StyleSheet.create({
    container: {
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
    centeredText: {
        textAlign: 'center',
        margin: 10
    }
});

export default BorderRadius;