//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import COLOR from '../../config/COLOR';
import SPACING from '../../config/SPACING';
import { TextInput } from 'react-native-gesture-handler';

// create a component
const {width} =Dimensions.get('window'); 
const Authencation = ({ navigation }) => {
    const backToMain = () => {
        return navigation.goBack();
    }
    const { container, header, btnBack, txtHeader, formLogin,boxButton,btnSignIn,txtSignIn,btnSignUp,txtSignUp,edtEmail,formPassowrd,edtPassword, form_btn,btnSignInNow} = styles;
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={header}>
                <TouchableOpacity style={btnBack}>
                    <Ionicons size={SPACING * 4} name='chevron-back'
                        color={COLOR.white}></Ionicons>
                </TouchableOpacity>
                <Text style={txtHeader}>Wearing a Dress</Text>
                <TouchableOpacity>
                    <Ionicons name='shirt-outline' size={SPACING * 3} color={COLOR.white} />
                </TouchableOpacity>
            </View>

            <View style={form_btn}>
            <View style={{flex:1, justifyContent:'center'}} >
            {/* form login */}
            <View style={formLogin}>
            <TextInput
                style={edtEmail}
                placeholder='Enter your email'></TextInput>
            </View>
            <View style={formPassowrd}>
                <TextInput
                style={edtPassword}
                placeholder='Enter your password'></TextInput>
            </View>
            <TouchableOpacity style={btnSignInNow}>
               <Text>SIGN IN NOW</Text>
            </TouchableOpacity>

            </View>
            {/* button */}
            <View style={boxButton}>
                <TouchableOpacity style={btnSignIn}>
                    <Text style={txtSignIn}>SIGN IN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={btnSignUp}>
                    <Text style={txtSignUp}>SIGN UP</Text>
                </TouchableOpacity>
            </View>

            </View>
         
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.primary,
        justifyContent:'space-between',
    
    },
    header: {
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
  
    txtHeader:{
        marginVertical:SPACING /2,
        fontSize:SPACING *2.5,
        color:COLOR.white,
        fontFamily:'Avenir'
    },
    boxButton:{
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
        width:width /1.2 ,
        flexDirection:'row',
    },
    btnSignIn:{
        flex:1,
        marginRight:SPACING/8 ,
        alignItems:'center',
        borderTopLeftRadius :50 ,
        borderBottomLeftRadius:50,
        backgroundColor: COLOR.white, 
        paddingVertical:SPACING *1.7,
        fontWeight:'600',       
        fontFamily: 'Avenir' 
    },
    txtSignIn:{
        color:COLOR.primary
    },
    btnSignUp:{
        flex:1,
        alignItems:'center',
        backgroundColor: COLOR.white, 
        paddingVertical:SPACING *1.7,
        borderTopRightRadius:50 ,
        borderBottomRightRadius:50,
        marginLeft:SPACING/8,
        fontWeight:'600',
        
    },
    edtEmail:{
        borderRadius:100,
        fontSize:SPACING *1.6,
        paddingLeft:SPACING*1.4,
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
        width:width /1.2 ,
        height:SPACING *5.5,
        backgroundColor:COLOR.white
    },
    edtPassword:{
        height:SPACING *5.5,
        marginTop:SPACING,
        borderRadius:100,
        fontSize:SPACING *1.6,
        paddingLeft:SPACING*1.4,
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
        width:width /1.2 ,
        backgroundColor:COLOR.white
    },
    btnSignInNow:{
        marginTop:SPACING,
        borderRadius:100,
        fontSize:SPACING *1.6,
        paddingLeft:SPACING*1.5,
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
        width:width /1.2 ,
        borderWidth:1,
        paddingVertical:SPACING *1.7,

    },
    form_btn:{
        flex:1,
        justifyContent:'space-between',

    }
});

//make this component available to the app
export default Authencation;
