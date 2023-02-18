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
import Ionicons from '@expo/vector-icons/Ionicons';
import Header from './Header';
import SPACING from '../../../config/SPACING';
import COLOR from '../../../config/COLOR';


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
     
      <SafeAreaView style={{flex:1,}}>
      <Header openDrawer={openDrawer} />
  
     <Tab.Navigator 
     screenOptions={{headerShown:false, tabBarActiveTintColor:COLOR.primary}}>
        <Tab.Screen
        options={{
          tabBarIcon: (tabInfo)=>{
          return (
            <Ionicons name='home-sharp'
            size={SPACING*2.7}
            color={tabInfo.focused ? COLOR.primary : 'gray'}
            />
          )
        }}}
         name="Home" component={Home} />  
       <Tab.Screen
        options={{
          tabBarBadge: 2,
          tabBarBadgeStyle: {color:COLOR.white},
          tabBarIcon: (tabInfo)=>{
          return (
            <Ionicons name='cart'
            size={SPACING*2.7}
            color={tabInfo.focused ? COLOR.primary : 'gray'}
            />
          )
        }}}
         name="Cart" component={Cart} />
          <Tab.Screen
        options={{
          tabBarIcon: (tabInfo)=>{
          return (
            <Ionicons name='information'
            size={SPACING*2.7}
            color={tabInfo.focused ? COLOR.primary : 'gray'}

            />
          )
        }}}
         name="Contact" component={Contact} />
      
      <Tab.Screen
        options={{
          tabBarIcon: (tabInfo)=>{
          return (
            <Ionicons name='search'
            size={SPACING*2.7}
            color={tabInfo.focused ? COLOR.primary : 'gray'}
            />
          )
        }}}
         name="Search" component={Search} />
     </Tab.Navigator>
      </SafeAreaView>
          


      
    );
};

// define your styles


//make this component available to the app
export default Shop;
