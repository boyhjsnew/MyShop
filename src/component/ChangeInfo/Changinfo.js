//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import SPACING from '../../config/SPACING';
import COLOR from '../../config/COLOR';
import { useNavigation, useRoute } from '@react-navigation/native';
import updateInfo from '../../Api/UpdateInfo';
import getToken from '../../Api/getToken';
import global from '../global';

// create a component
const Changeinfo = ({navigation , route}) => {

    const {name, phone, address} =route.params.user ;
    const { formLogin, edtEmail, formPassowrd, edtPassword, btnSignInNow } = styles;
    const [nameUser, setname] = useState(name);
    const [addressUser, setaddress] = useState(phone);
    const [phoneUser, setphone] = useState(address);
    const UpdateInfo =()=>{
        getToken().
        then(token => updateInfo(token,nameUser, addressUser,phoneUser)).
        then(res =>{global.onSignIn(res)
            navigation.goBack()
            alert('Changed Info')
        }).catch(e => console.log(e))
        
    }
    return (
        <View style={{ flex: 1, backfaceVisibility: 'white', alignItems: 'center', justifyContent: 'center' }}>
            {/* form login */}
            <View style={formLogin}>
                <TextInput
                    value={nameUser}
                    onChangeText={setname}
                    placeholderTextColor={COLOR.gray}
                    style={edtPassword}
                    placeholder='Enter your email'></TextInput>
            </View>
            <View style={formPassowrd}>
                <TextInput
                    value={addressUser}
                    onChangeText={setaddress}
                    placeholderTextColor={COLOR.gray}
                    style={edtPassword}
                    placeholder='Enter your address'></TextInput>
            </View>
            <View style={formPassowrd}>
                <TextInput
                    value={phoneUser}
                    onChangeText={setphone}
                    placeholderTextColor={COLOR.gray}
                    style={edtPassword}
                    placeholder='Enter your phone'></TextInput>
            </View>
            <TouchableOpacity style={btnSignInNow}
            onPress={UpdateInfo}>
                <Text style={{ color: COLOR.white, fontWeight: '600', }}>UPDATE</Text>
            </TouchableOpacity>
            <TouchableOpacity style={btnSignInNow}
            onPress ={()=>navigation.goBack()}>
                <Text style={{ color: COLOR.white, fontWeight: '600' }}>BACK</Text>
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
        fontWeight: '500',
        color: COLOR.primary

    },
    txtBtnNoActive: {
        color: 'gray',
        fontWeight: '500',

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
        backgroundColor: COLOR.white,
        borderColor: COLOR.primary,
        borderWidth: 2
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
        backgroundColor: COLOR.primary

    },
    form_btn: {
        flex: 1,
        justifyContent: 'space-between',

    }
});

//make this component available to the app
export default Changeinfo;
