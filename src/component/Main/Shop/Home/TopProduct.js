//import liraries
import React, { Component, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions , Image} from 'react-native';
import SPACING from '../../../../config/SPACING';
import COLOR  from '../../../../config/COLOR';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


const {width, height } =Dimensions.get('window') ;

const url = 'http://localhost:8080/api/images/product/'

// create a component
const TopProduct = (props) => {
    const navigation =useNavigation() ;
    const {topProducts} = props


    const goToProductDetail =(product)=>{
        return navigation.navigate("ProductDetail",{products:product})
       
    }
    return (
        <View style={{ backgroundColor:COLOR.white, margin:SPACING, shadowColor:'black', shadowOffset:{width:0, height:3},
        shadowOpacity:0.5, padding:SPACING}}>
            <View style={{paddingBottom:SPACING}}>
                <Text style={{fontSize:SPACING *1.8,textTransform: 'uppercase',
                    fontSize: SPACING * 1.8,
                    color: COLOR.gray,
                    fontWeight: '400',
                fontFamily:'Avenir'}}>top product</Text>
            </View>
            <View style={{flexWrap:'wrap', flexDirection:'row', justifyContent:'space-around'}}>
             {/* row item */}
             {topProducts.map((product)=>(
                 <TouchableOpacity
                 key={product.id}
                  onPress={()=>goToProductDetail(product)} style={{ width: width/2 -SPACING *4, backgroundColor:'white', shadowOpacity:0.2, marginBottom:SPACING*2}}>
                    <Image
                    resizeMode='cover'
                    style={{width:'100%', height:((width/2 -40)/361)*452}}
                    source={{uri: `${url}${product.images[0]}` }}></Image>
                    <View style={{margin:SPACING}}>
                    <Text numberOfLines={1} style={{fontSize:SPACING*1.5,color:'gray', textTransform:'uppercase'}}>{product.name}</Text>
                    <Text style={{fontSize:SPACING*1.5,color:'purple', textTransform:'uppercase'}}>{product.price}$</Text>
                    </View>
                </TouchableOpacity>
             ))}
               
                  
            </View>
            
        </View>
    );
};



//make this component available to the app
export default TopProduct;
