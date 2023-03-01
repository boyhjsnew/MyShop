//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import SPACING from '../../config/SPACING';
import COLOR from '../../config/COLOR';
import Register from '../../Api/Register';


// create a component

const SignUp = (props ) => {
    const {setIsSignIn} =props
    const [name ,setName] =useState('') ;
    const [email ,setEmail]= useState('');
    const [password ,setPassword]= useState('');
    const [confirmpassword ,setConfirmPassword]= useState('');
    const {  formLogin,  edtEmail, formPassowrd, edtPassword, btnSignInNow } = styles;
    
  
    return (
        <View>
        {/* form register */}
        <View style={formLogin}>
            <TextInput
                placeholderTextColor={COLOR.gray}
                onChangeText={setName}
                style={edtEmail}
                placeholder='Enter your name'></TextInput>
        </View>
        <View style={formPassowrd}>
            <TextInput
                placeholderTextColor={COLOR.gray}
                onChangeText={setEmail}
                style={edtPassword}
                placeholder='Enter your email'></TextInput>
        </View>
        <View style={formPassowrd}>
            <TextInput
                placeholderTextColor={COLOR.gray}
                onChangeText={setPassword}
                secureTextEntry
                style={edtPassword}
                value={password}
                placeholder='Enter your password'></TextInput>
        </View>
        <View style={formPassowrd}>
            <TextInput
                placeholderTextColor={COLOR.gray}
                onChangeText={setConfirmPassword}
                secureTextEntry
                value={confirmpassword}
                style={edtPassword}
                placeholder='Confirm Password'></TextInput>
        </View>
        <TouchableOpacity style={btnSignInNow}
        onPress={()=>Register(name, email, password).then(res =>{
            if (res == 'THANH_CONG'){
                return  alert('Successfully') , setIsSignIn(true),
                props.passData({email: email , password:password});
            }
        })}>
            <Text style={{ color: COLOR.white }}>SIGN UP NOW</Text>
        </TouchableOpacity>
        {/* form register */}

    </View>
    );
};
const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
    
    boxButton: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: width / 1.2,
        flexDirection: 'row',
    },
    btnSignIn: {
        flex: 1,
        marginRight: SPACING / 8,
        alignItems: 'center',
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        backgroundColor: COLOR.white,
        paddingVertical: SPACING * 1.7,
        fontWeight: '600',
        fontFamily: 'Avenir'
    },
    txtBtnActive: {
        fontWeight:'500',
        color: COLOR.primary
        
    },
    txtBtnNoActive: {
        color: 'gray',
        fontWeight:'500',
        
    },
    btnSignUp: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: COLOR.white,
        paddingVertical: SPACING * 1.7,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
        marginLeft: SPACING / 8,
        fontWeight: '600',

    },
    edtEmail: {
        borderRadius: 100,
        fontSize: SPACING * 1.6,
        paddingLeft: SPACING * 1.4,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: width / 1.2,
        height: SPACING * 5.5,
        backgroundColor: COLOR.white
    },
    edtPassword: {
        height: SPACING * 5.5,
        marginTop: SPACING,
        borderRadius: 100,
        fontSize: SPACING * 1.6,
        paddingLeft: SPACING * 1.4,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: width / 1.2,
        backgroundColor: COLOR.white
    },
    btnSignInNow: {
        borderColor: COLOR.white,
        marginTop: SPACING,
        borderRadius: 100,
        fontSize: SPACING * 1.6,
        paddingLeft: SPACING * 1.5,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: width / 1.2,
        borderWidth: 1,
        paddingVertical: SPACING * 1.7,

    },
    form_btn: {
        flex: 1,
        justifyContent: 'space-between',

    }
});


export default SignUp;
