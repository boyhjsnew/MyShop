//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import COLOR from '../../../../config/COLOR';
import SPACING from '../../../../config/SPACING';

const { height, width } = Dimensions.get('window');
// create a component
const Collection = () => {
    return (
        <View style={{
            height: height * 0.3,
            backgroundColor: COLOR.white,
            margin: SPACING,
            padding: SPACING,
            shadowColor: 'black',
            shadowOffset: { width: 0, height: 3 },
            shadowOpacity: 0.2
        }}>
            <Text
                style={{
                    fontFamily: 'Avenir',
                    textTransform: 'uppercase',
                    fontSize: SPACING * 1.8,
                    color: COLOR.gray,
                    fontWeight: '400'
                }}>spring collection</Text>

            <View style={{
                marginTop: SPACING * 0.6,
                flex: 1,
            }}>
                <Image
                style={{height:'100%',width:'100%'}}
                 source={require('../../../../assets/BannerColection.png')}></Image>
            </View>
        </View>
    );
};



//make this component available to the app
export default Collection;
