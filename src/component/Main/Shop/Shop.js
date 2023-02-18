//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Contact from './Contact/Contact';
import Home from './Home/Home';
import Cart from './Cart/Cart';
import Search from './Search/Search';
import Header from './Header';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

// create a component
const Shop = ({navigation}) => {
  const openDrawer = ()=> navigation.openDrawer();
    return (
      <SafeAreaView style={{flex:1}}>
      <Header openDrawer={openDrawer} />
  
     <Tab.Navigator 
     screenOptions={{headerShown:false}}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Contact" component={Contact} />
        <Tab.Screen name="Cart" component={Cart} />
        <Tab.Screen name="Search" component={Search} />
     </Tab.Navigator>
      </SafeAreaView>
          
    );
};

// define your styles


//make this component available to the app
export default Shop;
