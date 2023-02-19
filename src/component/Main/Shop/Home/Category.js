//import liraries
import React, { Component, useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import COLOR from '../../../../config/COLOR';
import SPACING from '../../../../config/SPACING';

import { ScrollView } from 'react-native-gesture-handler';
import { ceil } from 'react-native-reanimated';

const { height, width } = Dimensions.get('window');



// create a component
const Category = () => {
    const [indexCategory, setIndexCategory]= useState(0);
    const categorys = [
        { tittle: 'tittle 1', image: require('../../../../assets/category1.jpeg') },
        { titile: 'titile 2', image: require('../../../../assets/category2.jpeg') },
        { tittle: 'titile 3', image: require('../../../../assets/BannerColection.png') }

    ]
    const onChange =(nativeEvent)=>{
      const slide = (Math.floor((nativeEvent.contentOffset.x + width /2 )/ width)) 
      setIndexCategory(slide)
    }

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
                }}>category</Text>

            <View style={{
                marginTop: SPACING * 0.6,
                flex: 1,
                alignItems:'center',
                justifyContent:'flex-end'
                
            }}>
                <ScrollView
                    onScroll={({nativeEvent})=>{onChange(nativeEvent)}}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    snapToInterval={width}
                    contentContainerStyle={{ height: '100%', width: width * categorys.length }}
                    horizontal>
                    {categorys.map((category, index) =>
                        <Image
                            style={{ width: width, height: '100%' }}
                            key={index.toString()}
                            source={category.image}>
                        </Image>)}
                </ScrollView>

               
                    <View style={{ position:'absolute', flexDirection:'row',padding:SPACING/2, justifyContent:'space-between', width:width/9}}>
                    {categorys.map((item,index )=>
                        <Text style={{  fontSize: 7,
                          color: index == indexCategory?  COLOR.primary : COLOR.white }}>{'\u2B24'}</Text>   )}
              
                </View>
             
                

            </View>
        </View>
    );
};



//make this component available to the app
export default Category;
