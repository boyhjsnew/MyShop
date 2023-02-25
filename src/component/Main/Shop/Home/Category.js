//import liraries
import React, { Component, useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import COLOR from '../../../../config/COLOR';
import SPACING from '../../../../config/SPACING';

import { ScrollView } from 'react-native-gesture-handler';
import { ceil } from 'react-native-reanimated';

const { height, width } = Dimensions.get('window');



// create a component
const Category = (props) => {

    const {types} =props ;
    const [indexCategory, setIndexCategory] = useState(0);
   
    const onChange = (nativeEvent) => {
        const slide = (Math.floor((nativeEvent.contentOffset.x + width / 2) / width))
        setIndexCategory(slide)
    }
    const goToListProduct = ()=>{
        return props.navigation.navigate("ListProduct")
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
                }}>list of category</Text>

            <View style={{
                marginTop: SPACING * 0.6,
                flex: 1,
                alignItems: 'center',
                justifyContent: 'flex-end'

            }}>
                <ScrollView
                    scrollEventThrottle={16}
                    onScroll={({ nativeEvent }) => { onChange(nativeEvent) }}
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={width -10}
                    contentContainerStyle={{ height: '100%', width: width  * types.length  }}
                    horizontal>
                    {types.map((category, index) =>
                    <TouchableOpacity
                    onPress={goToListProduct}
                    key={category.id}
                     style={{justifyContent:'center',alignItems:'center'}}>
                        <Image
                            style={{ width: width - SPACING*1.9, height: '100%', resizeMode:'contain'}}
                            source={{uri: `http://192.168.1.152:8080/api/images/type/${category.image}`}}>
                        </Image> 
                        <Text
                        style={{position:'absolute',fontSize:SPACING *2,color:'gray', fontFamily:'Avenir' }}
                      >{category.name}</Text>
                    </TouchableOpacity>
                        )}
                </ScrollView>


                <View style={{ position: 'absolute', flexDirection: 'row', padding: SPACING / 2, justifyContent: 'space-between', width: width / 9 }}>
                    {types.map((item, index) =>
                        <Text
                        key={index.toString()}
                            style={{
                                width:SPACING *1.5,
                                fontSize: 7,
                                color: index == indexCategory ? COLOR.primary : COLOR.gray
                            }}>{'\u2B24'}</Text>)}

                </View>
            </View>
        </View>
    );
};



//make this component available to the app
export default Category;
