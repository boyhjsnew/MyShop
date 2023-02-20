//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import SPACING from '../../../../config/SPACING'
import COLOR from '../../../../config/COLOR'
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { color } from 'react-native-reanimated';


// create a component
const ListProduct = ({ navigation }) => {

    const { container, header, wrapper, headerContent, txtNameCategory
        , viewitem, rowitem, img, infoproduct, nameproduct, priceproduct,
        materialproduct, subdetail, txtbtn
    } = styles;
    return (
        <View style={container}>
            <ScrollView style={wrapper}>
                {/* header */}
                <View style={header}>
                    <View style={headerContent}>
                    <TouchableOpacity 
                    onPress={()=>navigation.goBack()}
                    >
                        <Ionicons name='chevron-back' size={SPACING * 3} color={COLOR.purple}></Ionicons>
                    </TouchableOpacity>
                        
                        {/* category name */}
                        <Text style={txtNameCategory}>Party Dress</Text>
                        <View style={{ width: SPACING * 3 }}></View>
                    </View>
                </View>
                {/* row item */}
                <TouchableOpacity>
                    <View style={viewitem}>
                    <View style={rowitem}>
                        {/* Image */}
                        <View style={img}>
                            <Image style={{ width: '100%', height: '100%' }} resizeMode='stretch' source={require('../../../../assets/category1.jpeg')}></Image>
                        </View>
                        {/* info product */}
                        <View style={infoproduct}>
                            <Text style={nameproduct}>Lace Sleeve Si</Text>
                            <Text style={priceproduct}>117$</Text>
                            <Text style={materialproduct}>Matirial silk</Text>
                            {/* color - btn show detaild */}
                            <View style={subdetail}>
                                <Text>Color RoyalBlue</Text>
                                <View style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: COLOR.purple }}></View>
                                <TouchableOpacity>
                                    <Text style={txtbtn}>Show Details</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={viewitem}>
                    <View style={rowitem}>
                        {/* Image */}
                        <View style={img}>
                            <Image style={{ width: '100%', height: '100%' }} resizeMode='stretch' source={require('../../../../assets/category1.jpeg')}></Image>
                        </View>
                        {/* info product */}
                        <View style={infoproduct}>
                            <Text style={nameproduct}>Lace Sleeve Si</Text>
                            <Text style={priceproduct}>117$</Text>
                            <Text style={materialproduct}>Matirial silk</Text>
                            {/* color - btn show detaild */}
                            <View style={subdetail}>
                                <Text>Color RoyalBlue</Text>
                                <View style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: COLOR.purple }}></View>
                                <TouchableOpacity>
                                    <Text style={txtbtn}>Show Details</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={viewitem}>
                    <View style={rowitem}>
                        {/* Image */}
                        <View style={img}>
                            <Image style={{ width: '100%', height: '100%' }} resizeMode='stretch' source={require('../../../../assets/category1.jpeg')}></Image>
                        </View>
                        {/* info product */}
                        <View style={infoproduct}>
                            <Text style={nameproduct}>Lace Sleeve Si</Text>
                            <Text style={priceproduct}>117$</Text>
                            <Text style={materialproduct}>Matirial silk</Text>
                            {/* color - btn show detaild */}
                            <View style={subdetail}>
                                <Text>Color RoyalBlue</Text>
                                <View style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: COLOR.purple }}></View>
                                <TouchableOpacity>
                                    <Text style={txtbtn}>Show Details</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                </TouchableOpacity>
                
               
              
                
            </ScrollView>


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
    
        paddingHorizontal:SPACING,
        backgroundColor: COLOR.white,
    },
   
    img: {
        width: 80,
        height: (80 * 451) / 361,
    },
    rowitem: {
        margin:SPACING/2,
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth:1,
        borderColor:"#F0F0F1"
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
        paddingBottom: SPACING ,
        color: COLOR.purple,
        fontFamily: 'Avenir',
        fontWeight:"500"
    },
    materialproduct: {
        fontFamily: 'Avenir',
        paddingBottom: SPACING ,
        fontWeight:"500"
    },
    subdetail: {
        width:'82%',
        alignItems:'center',
        flexDirection: 'row',
        justifyContent:'space-between',
     
        
    },
    txtbtn:{
        color:COLOR.purple,
        textTransform:'uppercase'
    }
});

//make this component available to the app
export default ListProduct;
