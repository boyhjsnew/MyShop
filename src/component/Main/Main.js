//import liraries
import React, { Component, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import Menu from './Menu';
import Shop from './Shop/Shop';
import { NavigationContainer } from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import Authencation from '../Authencation/Authencation';
import Changeinfo from '../ChangeInfo/Changinfo';
import OrderHistory from '../OrderHistory/OrderHistory';
import COLOR from '../../config/COLOR';
import checkLogin from '../../Api/checkLogin';
import getToken from '../../Api/getToken'
import global from '../global';
import SendOrder from '../../Api/SendOrder';

const Drawer = createDrawerNavigator();
// create a component
const Main = () => {
  useEffect(() => {
    getToken().
      then(token => checkLogin(token)).
      then(res => global.onSignIn(res.user)).
      catch(e => console.log(e));
  }, [])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer independent={true}>
        <Drawer.Navigator
          drawerContent={({ navigation }) => {
            return <Menu navigation={navigation} />
          }}
          screenOptions={{ headerShown: false, }}>
          <Drawer.Screen name="Shop" component={Shop}>
          </Drawer.Screen>
          <Drawer.Screen
            name="Authencation" component={Authencation}>
          </Drawer.Screen>
          <Drawer.Screen name="Changeinfo" component={Changeinfo}>
          </Drawer.Screen>
          <Drawer.Screen name="OrderHistory" component={OrderHistory}>
          </Drawer.Screen>
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

// define your styles


//make this component available to the app
export default Main;
