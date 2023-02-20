//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

// create a component
const CartView = ({navigation}) => {
    const goToProductDetail =()=>{
        return navigation.navigate("ProductDetail")
    }
    return (
        <View style={styles.container}>
           <TouchableOpacity
           onPress={goToProductDetail}>
              <Text>CartView got0 Product Detail</Text>
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
export default CartView;
