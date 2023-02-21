//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Pressable, Image, Dimensions, ViewBase } from 'react-native';

import COLOR from '../../../../config/COLOR';
import SPACING from '../../../../config/SPACING';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ColorSpace } from 'react-native-reanimated';
import { ScrollView } from 'react-native-gesture-handler';

// create a component
const ProductDetail = ({ navigation }) => {

    const { container, wrapper, header, img, boxImg, textPrice, txtTittle, txtDes, txtPricre, boxMaterial, txtMaterial } = styles
    const { width } = Dimensions.get('window');
    return (
        <View style={styles.container}>
            <View style={wrapper}>
                <View style={header}>
                    <Pressable onPress={() => alert('hello')}><Ionicons name='chevron-back' size={SPACING * 4} color={COLOR.primary}></Ionicons></Pressable>
                    <Ionicons name='cart-outline' size={SPACING * 4} color={COLOR.primary}></Ionicons>

                </View>
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={width}
                    contentContainerStyle={{ height: '100%', width: width - SPACING }}
                    horizontal>
                    <View style={boxImg}>
                        <View>
                            <Image style={img} source={require('../../../../assets/category1.jpeg')}></Image>
                        </View>
                        <View >
                            <Image style={img} source={require('../../../../assets/category1.jpeg')}></Image>
                        </View>

                    </View>
                </ScrollView>
                {/* text price */}
                <View style={textPrice}>
                    <Text style={txtTittle}> BANK OF THE / </Text>
                    <Text style={txtPricre}> 100$</Text>
                    <View ></View>
                </View>
                {/* description */}
              
                <Text style={txtDes} numberOfLines={5}>sdghsdgshdgshdgshdgshdgh
                dghsdgshdgshdgshdgshdghdghsdgshdgshdgshdgshdghdghsdgshdgshdgshdgshdgh
                dghsdgshdgshdgshdgshdgh
                dghsdgshdgshdgshdgshdgh
                dghsdgshdgshdgshdgshdgh
                dghsdgshdgshdgshdgshdgh
                dghsdgshdgshdgshdgshdgh
                dghsdgshdgshdgshdgshdgh

                </Text>

           
               
            </View>
            {/* Metirial-color */}
            <View style={{flex:1,justifyContent:'center'}}>
                <View style={boxMaterial}>
                    <Text style={txtMaterial}>Material fur</Text>
                    <Text style={txtMaterial}>Color fur</Text>
                </View>
            </View>


        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        borderRadius: SPACING / 2,
        backgroundColor: COLOR.white,
        margin: SPACING,
        padding: SPACING
    },

    header: {
        paddingBottom: SPACING,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    img: {
        margin: SPACING / 1.5,
        width: 155,
        height: 240,
    },

    boxImg: {
        flex: 1,
        paddingHorizontal: SPACING,
        alignItems: 'center',
        flexDirection: 'row',
    },
    textPrice: {
        marginHorizontal: SPACING * 1.4,
        borderBottomWidth: 1,
        borderColor: COLOR.gray,
        paddingTop: SPACING,
        paddingBottom: SPACING * 2.2,
        flexDirection: 'row',
        paddingHorizontal: SPACING * 2.5
    },
    txtTittle: {
        fontSize: SPACING * 2.3,
        fontWeight: '600'
    },
    txtPricre: {
        paddingLeft: SPACING / 5,
        color: COLOR.gray,
        fontSize: SPACING * 2.3,
        fontWeight: '500',
    },
    txtDes: {
        fontWeight: '400',
        paddingHorizontal: SPACING * 1.2,
        paddingVertical: SPACING * 2,
        color: COLOR.gray,
    },
    boxMaterial: {
    
        paddingHorizontal: SPACING,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    txtMaterial:{
        fontSize:SPACING*1.5,
        color:COLOR.purple,
        fontWeight:'500',
    }
});

//make this component available to the app
export default ProductDetail;
