//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

// create a component
const ListProduct = ({navigation}) => {
    return (
        <View style={styles.container}
       >
            <TouchableOpacity  onPress={()=> navigation.goBack()}><Text>Back for ListProduct</Text></TouchableOpacity>
            <TouchableOpacity  onPress={()=> navigation.navigate("ProductDetail")}><Text>goTo details</Text></TouchableOpacity>
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
export default ListProduct;
