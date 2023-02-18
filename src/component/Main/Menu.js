//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';



// create a component
const Menu = ({navigation}) => {
    const goToAuthencation =()=>{
        return navigation.navigate("Authencation");
    }
    const goToChangeInfo =()=>{
        return navigation.navigate("Changeinfo");
    }
    const goToOrderHistory =()=>{
        return navigation.navigate("OrderHistory");
    }
    
    return (
        <SafeAreaView >
          <TouchableOpacity
           onPress={goToAuthencation}>
            <Text>Go to Authencation</Text>
          </TouchableOpacity>
          <TouchableOpacity
           onPress={goToChangeInfo}>
            <Text>Go to ChangeInfo</Text>
          </TouchableOpacity>
          <TouchableOpacity
           onPress={goToOrderHistory}>
            <Text>Go to OrderHistory</Text>
          </TouchableOpacity>
        </SafeAreaView>
    );
};

// define your styles


//make this component available to the app
export default Menu;
