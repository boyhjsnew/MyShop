//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// create a component
const Authencation = ({navigation}) => {
    const backToMain =()=>{
        return navigation.goBack();
    }
    return (
        <View style={styles.container}>
            <Text>Authencation</Text>
            <TouchableOpacity
             onPress={backToMain}>
                <Text>Back to Main</Text>
            </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Authencation;
