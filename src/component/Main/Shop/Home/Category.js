//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import COLOR from '../../../../config/COLOR';
import SPACING from '../../../../config/SPACING';
import { SwiperFlatList } from 'react-native-swiper-flatlist';

const { height, width } = Dimensions.get('window');

const categorys = [
    { tittle: 'tittle 1', image: require('../../../../assets/category1.jpeg') },
    { titile: 'titile 2', image: require('../../../../assets/category2.jpeg') },
    { tittle: 'titile 3', image: require('../../../../assets/BannerColection.png')}

]

// create a component
const Category = () => {
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
            }}>
                <SwiperFlatList
                    contentContainerStyle={{ height: '100%', width:width}}
                    index={1}
                    paginationActiveColor={COLOR.primary}
                    paginationDefaultColor={COLOR.white}
                    showPagination
                    autoplayLoop
                    data={categorys}
                    renderItem={({ item }) => (
                        <View style={{flex:1}}>
                            <Image
                                style={{ height: '100%', width: "100%"}}
                                source={item.image}></Image>
                        </View>



                    )}
                />

            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Category;
