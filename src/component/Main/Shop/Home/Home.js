//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Collection from './Collection';
import Category from './Category';

// create a component
const Home = () => {
    return (
        <View style={{backgroundColor:'#BDBDB8', flex:1 }}>
          <Collection/>
          <Category/>
        </View>
    );
};



//make this component available to the app
export default Home;
