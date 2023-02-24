//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import COLOR from '../../config/COLOR';
import SPACING from '../../config/SPACING';
import { TextInput } from 'react-native-gesture-handler';
import Register from '../../Api/Register';
import SignUp from './SignUp'
import Login from './Login';

// create a component
const { width } = Dimensions.get('window');

const Authencation = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const backToMain = () => {
        return navigation.goBack();
    }

    //State Login or Register 
    // true = SignIn , false =SignUp
    const [isSignIn, setIsSignIn] = useState(true);
    const getData = (data) => {
        setEmail(data.email) ;
        setPassword (data.password);
    }
    
   

    const { container, header, btnBack, txtHeader,  boxButton, btnSignIn, txtBtnActive, btnSignUp,  form_btn,txtBtnNoActive } = styles;
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={header}>
                <TouchableOpacity style={btnBack}
                    onPress={backToMain}>
                    <Ionicons size={SPACING * 4} name='chevron-back'
                        color={COLOR.white}></Ionicons>
                </TouchableOpacity>
                <Text style={txtHeader}>Wearing a Dress</Text>
                <TouchableOpacity>
                    <Ionicons name='shirt-outline' size={SPACING * 3} color={COLOR.white} />
                </TouchableOpacity>
            </View>

            <View style={form_btn}>
                <View style={{ flex: 1, justifyContent: 'center' }} >
                    {/* Login or Register */}
                    {isSignIn ? <Login data= {{email, password}} /> : <SignUp setIsSignIn={setIsSignIn} passData={getData} />}

                </View>
                {/* button */}
                <View style={boxButton}>
                    <TouchableOpacity style={btnSignIn}
                        onPress={()=>setIsSignIn(!isSignIn)}>
                        <Text style={isSignIn ? txtBtnActive : txtBtnNoActive}>SIGN IN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={btnSignUp}
                        onPress={() => setIsSignIn(!isSignIn)}>
                        <Text style={isSignIn ? txtBtnNoActive : txtBtnActive}>SIGN UP</Text>
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
        justifyContent: 'space-between',

    },
    header: {
        justifyContent: 'space-around',
        flexDirection: 'row',
    },

    txtHeader: {
        marginVertical: SPACING / 2,
        fontSize: SPACING * 2.5,
        color: COLOR.white,
        fontFamily: 'Avenir'
    },
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

//make this component available to the app
export default Authencation;
