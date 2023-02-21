//import liraries
import React, { Component, useEffect, useState } from 'react';
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
import HomeView from './Home/HomeView';


const Tab = createBottomTabNavigator();


// create a component
const Shop = ({navigation}) => {  
  const [types , setTypes] = useState([]);
  const [topProducts, setTopProducts] =useState([])

  //get categorys
  const getTypesApiAsync = async () => {
    try {
      const response = await fetch(
        'http://192.168.1.152:8080/api/',
      );
      const json = await response.json();
      return setTypes(json.type),setTopProducts(json.product)
    } catch (error) {
      console.error(error);
    }
  };
  // const getTopProductApiAsync = async () => {
  //   try {
  //     const response = await fetch(
  //       'http://192.168.1.152:8080/api/',
  //     );
  //     const json = await response.json();
  //     return setTopProducts(json.product) 
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  useEffect(()=>{
    getTypesApiAsync() ;
    // getTopProductApiAsync()
  },[])
  
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
         name="Home" >
           {(props) => <Home {...props} types = {types} topProducts= {topProducts}/>}
         </Tab.Screen>  
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
