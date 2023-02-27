//import liraries
import React, { Component, useEffect } from 'react';
import 'react-native-gesture-handler';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import SearchView from './SearchView'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import ListProduct from '../ListProduct/ListProduct';
import ProductDetail from '../ProductDetail/ProductDetail';
import global from '../../../global';
import getSearch from '../../../../Api/getSearch';


const Stack = createStackNavigator();

// create a component


const Search = () => {
  return (
    <NavigationContainer
      independent={true}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name='SearchView'
          component={SearchView}>
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
export default Search;
