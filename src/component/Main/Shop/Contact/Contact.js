//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import SPACING from '../../../../config/SPACING';
import Ionicons from '@expo/vector-icons/Ionicons';
import COLOR from '../../../../config/COLOR';

// create a component
const Contact = () => {
    const {txt,map,about} = styles ;
    return (
        <View style={styles.container}>
        <MapView 
        style={map} />
        <View style={about}>
        <View style={{flexDirection:'row', justifyContent:'space-between', borderBottomWidth:1}}>
            <Ionicons name='map-sharp' size={SPACING*3} color={COLOR.primary}></Ionicons>
            <Text style={txt}>Ho Chi Minh</Text>
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-between', borderBottomWidth:1}}>
            <Ionicons name='map-sharp' size={SPACING*3} color={COLOR.primary}></Ionicons>
            <Text style={txt}>Ho Chi Minh</Text>
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-between', borderBottomWidth:1}}>
            <Ionicons name='map-sharp' size={SPACING*3} color={COLOR.primary}></Ionicons>
            <Text style={txt}>Ho Chi Minh</Text>
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-between', borderBottomWidth:1}}>
            <Ionicons name='map-sharp' size={SPACING*3} color={COLOR.primary}></Ionicons>
            <Text style={txt}>Ho Chi Minh</Text>
        </View>
       
        </View>
      </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin:SPACING/2
    },
    map: {
        width: '100%',
        height: '45%',
      },
    txt :{
        paddingRight:SPACING*3 ,
        fontWeight:'700',
        fontSize:SPACING*1.7,
        color:'purple'
    }  ,
    about:{

        paddingVertical: 100/2
    }
});

//make this component available to the app
export default Contact;
