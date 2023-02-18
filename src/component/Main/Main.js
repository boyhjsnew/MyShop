//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Menu from './Menu';
import Shop from './Shop/Shop';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Authencation from '../Authencation/Authencation';
import Changeinfo from '../ChangeInfo/Changinfo';
import OrderHistory from '../OrderHistory/OrderHistory';

const Drawer = createDrawerNavigator();
// create a component
const Main = ({navigation}) => {
   
    return (
      
        <NavigationContainer>
            <Drawer.Navigator
            drawerContent={({navigation})=>{
                return <Menu navigation={navigation}/>
            }}
            screenOptions={{headerShown:false}}>
             <Drawer.Screen name="Shop" component={Shop}>
                </Drawer.Screen>
                <Drawer.Screen name="Authencation" component={Authencation}>
                </Drawer.Screen>
                <Drawer.Screen name="Changeinfo" component={Changeinfo}>
                </Drawer.Screen>
                <Drawer.Screen name="OrderHistory" component={OrderHistory}>
                </Drawer.Screen>
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

// define your styles


//make this component available to the app
export default Main;
