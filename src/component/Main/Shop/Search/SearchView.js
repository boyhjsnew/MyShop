//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { color } from 'react-native-reanimated';
import getProductList from '../../../../Api/getProductList';
import global from '../../../global';
import getSearch from '../../../../Api/getSearch';
import SPACING from '../../../../config/SPACING';
import COLOR from '../../../../config/COLOR';


//create a component
const SearchView = ({ navigation }) => {
    const [SearchArr, setSearchArr] = useState([])
    const { container, header, wrapper, headerContent, txtNameCategory
        , viewitem, rowitem, img, infoproduct, nameproduct, priceproduct,
        materialproduct, subdetail, txtbtn
    } = styles;
    const getSearchItem = (key) => {
        getSearch(key).then(res => setSearchArr(res))
    }
    global.find = getSearchItem

    const goToDetaiProduct = () => {
        return navigation.navigate("ProductDetail")
    }
    return (
        <View style={styles.container}>
        { SearchArr &&  <FlatList
            data={SearchArr}
            renderItem={({item})=>{
                return  <TouchableOpacity>
                            <View style={viewitem}>
                                <View style={rowitem}>
                                    {/* Image */}
                                    <View style={img}>
                                        <Image style={{ width: '100%', height: '100%' }} resizeMode='stretch' source={{ uri: `http://192.168.1.152:8080/api/images/product/${item.images[0]}` }}></Image>
                                    </View>
                                    {/* info product */}
                                    <View style={infoproduct}>
                                        <Text style={nameproduct}>{global.jsUcfirst(item.name)}</Text>
                                        <Text style={priceproduct}>${item.price} </Text>
                                        <Text style={materialproduct}>{item.material}</Text>
                                        {/* color - btn show detaild */}
                                        <View style={subdetail}>
                                            <View style={{ flex: 1.2, }}>
                                                <Text>{item.color}</Text>
                                            </View>
                                            <View style={{ flex: 1, alignItems: 'center' }}>
                                                <View style={{ width: 16, height: 16, borderRadius: 9, backgroundColor: item.color.toLowerCase() }}></View>
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <TouchableOpacity
                                                    onPress={() => navigation.navigate("ProductDetail", { products: item })}>
                                                    <Text style={txtbtn}>Show Details</Text>
                                                </TouchableOpacity>
                                            </View>

                                        </View>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
            }}>

            </FlatList> }
         
            
        </View>
    );
};

//define your styles
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
        fontSize: 15,
        fontFamily: 'Avenir',
        paddingBottom: SPACING,
        fontWeight: "500"
    },
    subdetail: {
        paddingRight: SPACING * 12,
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',

    },
    txtbtn: {
        fontWeight: '500',
        fontSize: SPACING * 1.2,
        color: COLOR.purple,
        textTransform: 'uppercase'
    }
});

//make this component available to the app
export default SearchView;
