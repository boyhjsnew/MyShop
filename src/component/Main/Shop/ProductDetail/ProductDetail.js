//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Pressable, Image, Dimensions, ViewBase } from 'react-native';

import COLOR from '../../../../config/COLOR';
import SPACING from '../../../../config/SPACING';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ColorSpace } from 'react-native-reanimated';
import { ScrollView } from 'react-native-gesture-handler';
import TopProduct from '../Home/TopProduct';
import { useNavigation, useRoute } from '@react-navigation/native';
import global from '../../../global';
const url ='http://localhost:8080/api/images/product/'
// create a component
const ProductDetail = () => {
    const route = useRoute()
    const navigation = useNavigation()
    const { container, wrapper, header, img, boxImg, textPrice, txtTittle, txtDes, txtPricre, boxMaterial, txtMaterial } = styles
    const { width } = Dimensions.get('window');
    
    const addToCart = ()=>{
        global.addProductToCart(route.params.products)
    }
      
    const {price, name, color, images ,material,description} = route.params.products;
    return (
        <View style={styles.container}>
            <View style={wrapper}>
                <View style={header}>
                    <TouchableOpacity
                    onPress={()=>navigation.goBack()}
                    ><Ionicons name='chevron-back' size={SPACING * 3} color={COLOR.primary}></Ionicons></TouchableOpacity>
                    <TouchableOpacity onPress={addToCart}><Ionicons name='cart-outline' size={SPACING * 3} color={COLOR.primary}></Ionicons></TouchableOpacity>
                </View>
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={width}
                    contentContainerStyle={{ height: '100%', width: width - SPACING }}
                    horizontal>
                    <View style={boxImg}>
                    {images.map((image,index)=>(
                        <View key={index.toString()}>
                            <Image style={img} source={{uri:`${url}${image}`}}></Image>
                        </View>
                    ))}
                    </View>
                </ScrollView>
                {/* text price */}
                <View style={textPrice}>
                    <Text style={txtTittle}> {name} / </Text>
                    <Text style={txtPricre}> {price}$</Text>
                    <View ></View>
                </View>
                {/* description */}
              
                <Text style={txtDes} numberOfLines={5}> {description}
                </Text>
            </View>
            {/* Metirial-color */}
            <View style={{flex:1,justifyContent:'center'}}>
                <View style={boxMaterial}>
                    <Text style={txtMaterial}>{material}</Text>
                    <View style={{flexDirection:'row'}}>
                         <Text style={txtMaterial}>{color}</Text>
                         <View style={{width:SPACING*1.5, height:SPACING*1.5, borderRadius:SPACING,backgroundColor:color.toLowerCase(),alignSelf:'center',borderWidth:2,borderColor:COLOR.gray}}></View>
                    </View>
                    
               
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
        paddingHorizontal: SPACING *1.3,
        paddingVertical: SPACING * 2,
        color: COLOR.gray,
    },
    boxMaterial: {
    
        paddingHorizontal: SPACING,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    txtMaterial:{
        margin:SPACING/2,
        fontSize:SPACING*1.5,
        color:COLOR.purple,
        fontWeight:'500',
        paddingRight:SPACING/2
    }
});

//make this component available to the app
export default ProductDetail;
