//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../../../config/COLOR';
import Ionicons from '@expo/vector-icons/Ionicons';
import SPACING from '../../../config/SPACING';
import COLOR from '../../../config/COLOR';
import global from '../../global';


// create a component
const Header = (props) => {
    const [inputtext ,setinputtext] =useState('')
    
  
    const { height, width } = Dimensions.get('window');
    return (
        <View style={{ height: height / 8, backgroundColor: COLORS.primary }}>
            <View style={{ padding: SPACING * 1.6 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems:'center'}}>
                    <TouchableOpacity
                     onPress={props.openDrawer}>
                        <Ionicons style={{marginLeft:-5}} name='menu' size={SPACING * 3.3} color={COLORS.white} />
                    </TouchableOpacity>
                    <Text 
                    style={{ fontSize: SPACING * 2.2,
                    color: COLORS.white,
                    fontFamily:'Avenir' }}>Wearing a Dress</Text>
                    <TouchableOpacity>
                        <Ionicons name='shirt-outline' size={SPACING * 3} color={COLORS.white} />
                    </TouchableOpacity>
                </View>
                <View>
                    <TextInput 
                    onPressIn={global.clickSearch}
                        style={{
                            paddingHorizontal:SPACING *2.3,
                            marginTop:SPACING/3,
                            height: height/23,
                            backgroundColor: COLORS.white,
                        }}
                        value={inputtext}
                        onChangeText={setinputtext}
                        placeholderTextColor={COLOR.gray}
                        placeholder='What do you want to buy ?'
                        onSubmitEditing={()=>{
                            setinputtext('')
                            global.find(inputtext)}}
                        >
                    </TextInput>
                </View>
            </View>

        </View>
    );
};



//make this component available to the app
export default Header;
