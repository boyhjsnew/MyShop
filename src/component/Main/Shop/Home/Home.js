//import liraries
import React, { Component, useEffect, useState } from 'react';
import 'react-native-gesture-handler';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeView from './HomeView'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import ListProduct from '../ListProduct/ListProduct';
import ProductDetail from '../ProductDetail/ProductDetail';


const Stack = createStackNavigator();

// create a component


const Home = (props) => {
  const {types, topProducts} =props

  return (
    <NavigationContainer
      independent={true}>
      <Stack.Navigator 
      screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name='HomeView'>
          {(props)=><HomeView {...props} types={types}  topProducts={topProducts}></HomeView>}
        </Stack.Screen>
        <Stack.Screen
          name='ListProduct'
          component={ListProduct}>
        </Stack.Screen>
        <Stack.Screen
          name='ProductDetail'
          component={ProductDetail}>
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

//make this component available to the app
export default Home;
