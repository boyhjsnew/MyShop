//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Collection from './Collection';
import Category from './Category';
import TopProduct from './TopProduct';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


// create a component

const HomeView = (props) => {
  const navigation = useNavigation()
  const {types}=props
    return (
        <ScrollView style={{backgroundColor:'#BDBDB8', flex:1 }}>
          <Collection/>
          <Category navigation={navigation} types={types}/>
          <TopProduct navigation={navigation}/>
        </ScrollView>
    );
};



//make this component available to the app
export default HomeView;