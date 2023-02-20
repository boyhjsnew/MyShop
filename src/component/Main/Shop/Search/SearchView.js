//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

// create a component
const SearchView = ({navigation}) => {

    const goToDetaiProduct =()=>{
        return navigation.navigate("ProductDetail")
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity 
            onPress={goToDetaiProduct}>
            <Text>SearchView go to product detail</Text>
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
export default SearchView;
