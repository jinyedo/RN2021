import React, { Component } from 'react';
import { View, Text } from 'react-native'
import { DataTest } from './DataTest';
 
class Midterm extends Component {

    constructor() {
        super()
        this.state = {
            id : 201740233,
            name: '진예도'
        }
    }

    render() {
        const foo = [1, 2, 3, 4, 5];
        return(
            <View>
                <DataTest id={this.state.id} name={this.state.name} foo={foo}>
                    
                </DataTest>
            </View>
        )
    }
}

export default Midterm;