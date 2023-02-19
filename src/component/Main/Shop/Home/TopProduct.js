//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions , Image} from 'react-native';
import SPACING from '../../../../config/SPACING';
import COLOR  from '../../../../config/COLOR';


const {width, height } =Dimensions.get('window') ;


// create a component
const TopProduct = () => {
    return (
        <View style={{ backgroundColor:COLOR.white, margin:SPACING, shadowColor:'black', shadowOffset:{width:0, height:3},
        shadowOpacity:0.5, padding:SPACING}}>
            <View style={{paddingBottom:SPACING}}>
                <Text style={{fontSize:SPACING *1.8,textTransform: 'uppercase',
                    fontSize: SPACING * 1.8,
                    color: COLOR.gray,
                    fontWeight: '400',
                fontFamily:'Avenir'}}>Top Product</Text>
            </View>
            <View style={{flexWrap:'wrap', flexDirection:'row', justifyContent:'space-around'}}>
             {/* row item */}
                <View style={{ width: width/2 -SPACING *4, backgroundColor:'white', shadowOpacity:0.2, marginBottom:SPACING*2}}>
                    <Image
                    style={{width:'100%', height:((width/2 -40)/361)*452}}
                    source={require('../../../../assets/category1.jpeg')}></Image>
                    <View style={{margin:SPACING}}>
                    <Text style={{fontSize:SPACING*1.5,color:'gray', textTransform:'uppercase'}}>Product Name</Text>
                    <Text style={{fontSize:SPACING*1.5,color:'purple', textTransform:'uppercase'}}>200 $</Text>
                    </View>
                </View>
                  {/* row item */}
                  <View style={{ width: width/2 -SPACING *4, backgroundColor:'white', shadowOpacity:0.2, marginBottom:SPACING*2}}>
                    <Image
                    style={{width:'100%', height:((width/2 -40)/361)*452}}
                    source={require('../../../../assets/category1.jpeg')}></Image>
                    <View style={{margin:SPACING}}>
                    <Text style={{fontSize:SPACING*1.5,color:'gray', textTransform:'uppercase'}}>Product Name</Text>
                    <Text style={{fontSize:SPACING*1.5,color:'purple', textTransform:'uppercase'}}>200 $</Text>
                    </View>
                </View>
                  {/* row item */}
                  <View style={{ width: width/2 -SPACING *4, backgroundColor:'white', shadowOpacity:0.2, marginBottom:SPACING*2}}>
                    <Image
                    style={{width:'100%', height:((width/2 -40)/361)*452}}
                    source={require('../../../../assets/category1.jpeg')}></Image>
                    <View style={{margin:SPACING}}>
                    <Text style={{fontSize:SPACING*1.5,color:'gray', textTransform:'uppercase'}}>Product Name</Text>
                    <Text style={{fontSize:SPACING*1.5,color:'purple', textTransform:'uppercase'}}>200 $</Text>
                    </View>
                </View>
                  {/* row item */}
                  <View style={{ width: width/2 -SPACING *4, backgroundColor:'white', shadowOpacity:0.2, marginBottom:SPACING*2}}>
                    <Image
                    style={{width:'100%', height:((width/2 -40)/361)*452}}
                    source={require('../../../../assets/category1.jpeg')}></Image>
                    <View style={{margin:SPACING}}>
                    <Text style={{fontSize:SPACING*1.5,color:'gray', textTransform:'uppercase'}}>Product Name</Text>
                    <Text style={{fontSize:SPACING*1.5,color:'purple', textTransform:'uppercase'}}>200 $</Text>
                    </View>
                </View>
                 {/* row item */}
                 <View style={{ width: width/2 -SPACING *4, backgroundColor:'white', shadowOpacity:0.2, marginBottom:SPACING*2}}>
                    <Image
                    style={{width:'100%', height:((width/2 -40)/361)*452}}
                    source={require('../../../../assets/category1.jpeg')}></Image>
                    <View style={{margin:SPACING}}>
                    <Text style={{fontSize:SPACING*1.5,color:'gray', textTransform:'uppercase'}}>Product Name</Text>
                    <Text style={{fontSize:SPACING*1.5,color:'purple', textTransform:'uppercase'}}>200 $</Text>
                    </View>
                </View>
                 {/* row item */}
                 <View style={{ width: width/2 -SPACING *4, backgroundColor:'white', shadowOpacity:0.2, marginBottom:SPACING*2}}>
                    <Image
                    style={{width:'100%', height:((width/2 -40)/361)*452}}
                    source={require('../../../../assets/category1.jpeg')}></Image>
                    <View style={{margin:SPACING}}>
                    <Text style={{fontSize:SPACING*1.5,color:'gray', textTransform:'uppercase'}}>Product Name</Text>
                    <Text style={{fontSize:SPACING*1.5,color:'purple', textTransform:'uppercase'}}>200 $</Text>
                    </View>
                </View>
                
               
            </View>
            
        </View>
    );
};



//make this component available to the app
export default TopProduct;
