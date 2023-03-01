//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import SPACING from '../../config/SPACING';
import COLOR from '../../config/COLOR';
import SignIn from '../../Api/SignIn'
import global from '../global';
import { useNavigation } from '@react-navigation/native';
import saveToken from '../../Api/saveToken';
import getToken from '../../Api/getToken';

// create a component

const Login = (props) => {
    const navigation = useNavigation()
    const [email, setEmail] = useState(props.data.email);
    const [password, setPassword] = useState(props.data.password);
    const {  formLogin,  edtEmail, formPassowrd, edtPassword, btnSignInNow } = styles;
    const Login = ()=>(
        SignIn(email ,password).
        then(res=>{
            global.onSignIn(res.user);
            saveToken(res.token) ;
            navigation.goBack()
        }).catch(e =>  alert('sai')) 
    )
    return (
        <View>
            {/* form login */}
            <View style={formLogin}>
                <TextInput
                    placeholderTextColor={COLOR.gray}
                    onChangeText={setEmail}
                    style={edtEmail}
                    placeholder='Enter your email'></TextInput>
            </View>
            <View style={formPassowrd}>
                <TextInput
                placeholderTextColor={COLOR.gray}
                    onChangeText={setPassword}
                    secureTextEntry
                    style={edtPassword}
                    placeholder='Enter your password'></TextInput>
            </View>
            <TouchableOpacity style={btnSignInNow}
            onPress={Login}>
                <Text style={{ color: COLOR.white }}>SIGN IN NOW</Text>
            </TouchableOpacity>
            {/* form login */}
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
        color:COLOR.gray,
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
        color:COLOR.gray,
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


export default Login;
