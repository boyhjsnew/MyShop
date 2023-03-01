//import liraries
import { useNavigation } from '@react-navigation/native';
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ViewBase } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import COLOR from '../../../../config/COLOR';
import SPACING from '../../../../config/SPACING';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import global from '../../../global'
import SendOrder from '../../../../Api/SendOrder';
import saveData from '../../../../Api/saveData';

// create a component
const CartView = (props) => {

    const navigation = useNavigation();
    const goToitemDetail = (item) => {
        return navigation.navigate("ProductDetail", {products :item})
    }
    const [isCheckOut, setIsCheckOut] = useState(false)
    const url = 'http://192.168.1.152:8080/api/images/product/'
    const { carts } = props;
    const { container, img, itemrow, info, nameitem, txtprice, btnQuantity, btnCheckNow, txtCheckout } = styles;
    const width = Dimensions.get('window').width;

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      });    
    const checkOut = async ()=>{
        if(carts.length <=0){
            alert('Cart Is Null')
        }
        else {
            SendOrder().then(res => alert("Completed"))
        }
    }
    return (
        <View style={styles.container}>
            {/* item cart */}
            <View style={{ flex: 9, marginHorizontal: SPACING * 1.5, marginTop: SPACING }}>
                <FlatList
                    extraData={isCheckOut}
                    showsVerticalScrollIndicator={false}
                    data={carts}
                    renderItem={({ item ,index}) => (
                        <View style={itemrow}>
                            <View style={img}>
                                <Image style={{ width: "100%", height: '100%' }} source={{ uri: `${url}${item.products.images[0]}` }}></Image>
                            </View>
                            {/* info */}
                            <View style={info}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: width / 1.6 }}>
                                    <Text style={nameitem}>{item.products.name}</Text>
                                    <TouchableOpacity onPress={()=> global.deleteCart(index)}>
                                        <FontAwesome name='remove' color={COLOR.gray} size={SPACING * 1.7} ></FontAwesome>
                                    </TouchableOpacity>

                                </View>
                                <Text style={txtprice}> {item.products.price} $</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    {/* quantity */}
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width / 1.2, flex: 1 }}>
                                        <TouchableOpacity style={btnQuantity}
                                            onPress={() => {
                                                if(item.quantity < 10){
                                                    global.incrQuantity(item.products.id)
                                                }else{
                                                    alert('limited') ;
                                                }
                                            }}>
                                            <Ionicons name='add' color={COLOR.white} ></Ionicons>
                                        </TouchableOpacity>
                                        <Text>{item.quantity}</Text>
                                        <TouchableOpacity style={btnQuantity}
                                            onPress={() => {
                                                if (item.quantity > 1) {
                                                    global.decrQuantity(item.products.id)
                                                }
                                            }
                                            }>
                                            <Ionicons name='remove' color={COLOR.white} ></Ionicons>
                                        </TouchableOpacity>
                                    </View>
                                    {/* show detaild */}
                                    <View style={{ flex: 2, alignItems: 'flex-end' }}>
                                        <TouchableOpacity 
                                        onPress={()=>goToitemDetail(item.products)} >
                                            <Text style={{ color: COLOR.purple }}>SHOW DETAILS</Text>
                                        </TouchableOpacity>
                                    </View>

                                </View>

                            </View>

                        </View>
                    )}
                    keyExtractor={(item, index) => 'key' + index}>
                </FlatList>

            </View>

            {/* button buy */}
            <TouchableOpacity style={btnCheckNow}
            onPress={checkOut}>
                <Text style={txtCheckout}>Total {formatter.format(
                    carts.reduce((total, item)=>{
                    return total+item.products.price * item.quantity
                },0)
                )} Checkout now</Text>
            </TouchableOpacity>
        </View>

    );
};

const { width } = Dimensions.get('window')
// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    itemrow: {
        borderRadius: SPACING / 2,
        alignItems: 'center',
        backgroundColor: COLOR.white,
        padding: SPACING,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        flexDirection: 'row',
        width: '100%',
        marginBottom: SPACING
    },
    img: {
        width: 75,
        height: 100
    },
    info: {
        padding: SPACING / 1.2,
        paddingLeft: SPACING * 2,
    },
    nameitem: {
        fontSize: SPACING * 1.8,
        color: COLOR.gray,
        fontFamily: 'Avenir',
        fontWeight: '500',
        paddingBottom: SPACING * 1.5
    },
    txtprice: {
        fontSize: SPACING * 1.5,
        color: COLOR.purple,
        fontWeight: '400',
        paddingBottom: SPACING * 1.5
    },
    btnQuantity: {
        shadowOpacity: 0.1,
        borderRadius: SPACING / 2,
        backgroundColor: COLOR.primary,
        padding: SPACING / 2,
    },

    btnCheckNow: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: SPACING * 1.5,
        marginVertical: SPACING,
        marginBottom: SPACING * 2,
        backgroundColor: COLOR.primary,
        borderRadius: SPACING / 2
    },
    txtCheckout: {
        color: COLOR.white,
        fontSize: SPACING * 1.5,
        textTransform: 'uppercase',
        fontWeight: '500'
    }
});
//make this component available to the app
export default CartView;
