//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import SPACING from '../../../../config/SPACING'
import COLOR from '../../../../config/COLOR'
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { color } from 'react-native-reanimated';
import getProductList from '../../../../Api/getProductList';

// create a component
const ListProduct = ({ navigation, route }) => {

    const { container, header, wrapper, headerContent, txtNameCategory
        , viewitem, rowitem, img, infoproduct, nameproduct, priceproduct,
        materialproduct, subdetail, txtbtn
    } = styles;
    const { name, id } = route.params.types

    useEffect(() => {
        getProductList(id, 2).then(arrProduct => { setProductList(arrProduct) }).catch(e => console.log(e))

    }, [])
    const [productList, setProductList] = useState([]);

    return (

        <View style={container}>
            <View style={wrapper}>
                {/* header */}
                <View style={header}>
                    <View style={headerContent}>
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                        >
                            <Ionicons name='chevron-back' size={SPACING * 3} color={COLOR.purple}></Ionicons>
                        </TouchableOpacity>

                        {/* category name */}
                        <Text style={txtNameCategory}>{name}</Text>
                        <View style={{ width: SPACING * 3 }}></View>
                    </View>
                </View>
                {/* row item */}
                <FlatList
                    data={productList}
                    renderItem={({ item,index }) => (
                        <TouchableOpacity
                        key={index.toString()}>
                            <View style={viewitem}>
                                <View style={rowitem}>
                                    {/* Image */}
                                    <View style={img}>
                                        <Image style={{ width: '100%', height: '100%' }} resizeMode='stretch' source={{ uri: `http://192.168.1.152:8080/api/images/product/${item.images[0]}` }}></Image>
                                    </View>
                                    {/* info product */}
                                    <View style={infoproduct}>
                                        <Text style={nameproduct}>{item.name}</Text>
                                        <Text style={priceproduct}>{item.price}</Text>
                                        <Text style={materialproduct}>{item.material}</Text>
                                        {/* color - btn show detaild */}
                                        <View style={subdetail}>
                                         <View style={{flex:1.2, }}> 
                                         <Text>{item.color}</Text>
                                          </View>
                                            <View style={{flex:1, alignItems:'center'}}> 
                                            <View style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: item.color.toLowerCase()}}></View>
                                            </View>
                                            <View style={{flex:1}}>
                                            <TouchableOpacity
                                             onPress={()=> navigation.navigate("ProductDetail", {products:item})}>
                                                <Text style={txtbtn}>Show Details</Text>
                                            </TouchableOpacity>
                                            </View>
                                           
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>

                    )}>

                </FlatList>

            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
        flex: 1,
        margin: SPACING,
        shadowColor: 'black',
        shadowOffset: { height: 3, width: 0 },
        shadowOpacity: 0.3
    },
    header: {
        backgroundColor: COLOR.white,
        padding: SPACING / 2,
    },
    headerContent: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    txtNameCategory: {
        fontSize: SPACING * 1.8,
        alignSelf: 'center',
        fontFamily: 'Avenir',
        color: COLOR.purple
    },
    viewitem: {
        paddingHorizontal: SPACING,
        backgroundColor: COLOR.white,
    },
    img: {
        width: 80,
        height: (80 * 451) / 361,
    },
    rowitem: {
        margin: SPACING / 2,
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 1,
        borderColor: "#F0F0F1"
    },
    infoproduct: {
        paddingVertical: SPACING,
        paddingLeft: SPACING,
    },
    nameproduct: {
        fontSize: SPACING * 1.75,
        fontFamily: 'Avenir',
        color: COLOR.gray,
        paddingBottom: SPACING
    },
    priceproduct: {
        paddingBottom: SPACING,
        color: COLOR.purple,
        fontFamily: 'Avenir',
        fontWeight: "500"
    },
    materialproduct: {
        fontFamily: 'Avenir',
        paddingBottom: SPACING,
        fontWeight: "500"
    },
    subdetail: { 
        paddingRight:SPACING*12,
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
    
    },
    txtbtn: {
        fontWeight:'500',
        fontSize:SPACING*1.2 ,
        color: COLOR.purple,
        textTransform: 'uppercase'
    }
});

//make this component available to the app
export default ListProduct;

// // { productList  && productList.map((product) =>(
//    <TouchableOpacity>
//    <View style={viewitem}>
//        <View style={rowitem}>
//            {/* Image */}
//            <View style={img}>
//                <Image style={{ width: '100%', height: '100%' }} resizeMode='stretch' source={{uri: `http://192.168.1.152:8080/api/images/product/${product.images[0]}`}}></Image>
//            </View>
//            {/* info product */}
//            <View style={infoproduct}>
//                <Text style={nameproduct}>{product.name}</Text>
//                <Text style={priceproduct}>{product.price}</Text>
//                <Text style={materialproduct}>{product.material}</Text>
//                {/* color - btn show detaild */}
//                <View style={subdetail}>
//                    <Text>{product.color}</Text>
//                    <View style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: product.color.toLowerCase() }}></View>
//                    <TouchableOpacity>
//                        <Text style={txtbtn}>Show Details</Text>
//                    </TouchableOpacity>
//                </View>
//            </View>
//        </View>
//    </View>
// // </TouchableOpacity>
// // ))}