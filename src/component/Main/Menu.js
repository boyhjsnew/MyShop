//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import saveToken from '../../Api/saveToken';
import COLOR from '../../config/COLOR';
import SPACING from '../../config/SPACING';
import global from '../global';


const { width, height } = Dimensions.get('window');

// create a component
const Menu = ({ navigation }) => {
  const [userOb, setUserOb] = useState();

  const goToAuthencation = () => {
    return navigation.navigate("Authencation");
  }
  const goToChangeInfo = () => {
    return navigation.navigate("Changeinfo", { user: userOb });
  }
  const goToOrderHistory = () => {
    return navigation.navigate("OrderHistory");
  }

  // state login
  const [name, setName] = useState('')
  const onSignIn = (user) => {
    return setName(user.name),
      setUserOb(user)
  }
  global.onSignIn = onSignIn
  
  const signOut = () => {
    saveToken('');
    setName('');
  }

  const SIGN_IN = () =>
    <View>
      <TouchableOpacity style={btnSignIn}
        onPress={goToAuthencation}>
        <Text style={btnText}>sign in</Text>
      </TouchableOpacity>
    </View>
  const LOGGED = () => <View style={contenForLogin}>
    <Text style={txtUsername}>{name ? name : 'null'}</Text>
    <View>
      <TouchableOpacity style={btnForLogin}
        onPress={goToOrderHistory}>
        <Text style={btnTextForLogin}>Order History</Text>
      </TouchableOpacity>
      <TouchableOpacity style={btnForLogin}
        onPress={goToChangeInfo}>
        <Text style={btnTextForLogin}>Change Info</Text>
      </TouchableOpacity>
      <TouchableOpacity style={btnForLogin}
        onPress={signOut}>
        <Text style={btnTextForLogin}>Sign Out</Text>
      </TouchableOpacity>
    </View>

  </View>

  const { container, Img, btnSignIn, btnText, btnForLogin, btnTextForLogin, contenForLogin, txtUsername } = styles;

  return (
    <View style={container}>
      <Image
        style={Img}
        source={require('../../assets/user.png')}></Image>
      {/* SING_IN or LOGGED */}
      {name ? <LOGGED /> : <SIGN_IN />}
    </View>
  );
};

// define your styles

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.primary,
    flex: 1,
    alignItems: 'center'
  },
  Img: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginTop: SPACING * 2,
    marginBottom: SPACING * 2
  },
  btnSignIn: {
    alignItems: 'center',
    justifyContent: 'center',
    height: height / 17,
    width: width / 1.7,
    backgroundColor: COLOR.white,
    borderRadius: SPACING
  },
  btnText: {
    fontWeight: '500',
    color: COLOR.primary,
    textTransform: 'uppercase',
    fontFamily: 'Avenir',
    fontSize: SPACING * 1.7
  },
  btnForLogin: {
    marginVertical: SPACING / 2,
    paddingLeft: SPACING,
    justifyContent: 'center',
    height: height / 17,
    width: width / 1.7,
    backgroundColor: COLOR.white,
    borderRadius: SPACING
  },
  btnTextForLogin: {
    fontWeight: '500',
    color: COLOR.primary,
    fontFamily: 'Avenir',
    fontSize: SPACING * 1.7
  },
  txtUsername: {
    fontSize: SPACING * 1.8,
    fontFamily: 'Avenir',
    color: COLOR.white,
    fontWeight: '500',
    alignSelf: 'center'
  },
  contenForLogin: {
    height: height / 2.5,
    justifyContent: 'space-between'

  }
})


//make this component available to the app
export default Menu;
