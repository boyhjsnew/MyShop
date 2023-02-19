//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Collection from './Collection';
import Category from './Category';
import TopProduct from './TopProduct';
import { ScrollView } from 'react-native-gesture-handler';

// create a component
const Home = () => {
    return (
        <ScrollView style={{backgroundColor:'#BDBDB8', flex:1 }}>
          {/* <Collection/>
          <Category/> */}
          <TopProduct/>

        </ScrollView>
    );
};



//make this component available to the app
export default Home;
