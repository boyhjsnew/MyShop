//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Contact from './Contact/Contact';
import Home from './Home/Home';
import Cart from './Cart/Cart';
import Search from './Search/Search';
import Ionicons from '@expo/vector-icons/Ionicons';
import Header from './Header';
import SPACING from '../../../config/SPACING';
import COLOR from '../../../config/COLOR';
import global from '../../global';

import saveData from '../../../Api/saveData';
import getData from '../../../Api/getData';
import { Value } from 'react-native-reanimated';
import getToken from '../../../Api/getToken';

const Tab = createBottomTabNavigator();
// create a component
const Shop = ({ navigation }) => {
  const [carts, setCarts] = useState([]);
  const [types, setTypes] = useState([]);
  const [topProducts, setTopProducts] = useState([])

  //get categorys

  useEffect(() => {
    const getTypesApiAsync = async () => {
      try {
        const response = await fetch(
          'http://192.168.1.152:8080/api/',
        );
        const json = await response.json();
        return setTypes(json.type),
          setTopProducts(json.product)
      } catch (error) {
        console.error(error);
      }
    };
    getTypesApiAsync();
    // getTopProductApiAsync()
  }, []);

  useEffect(()=>{
    getToken
  },[])

  useEffect(() => {
    getData().then((value) => setCarts(value)).catch(() => setCarts([]))
  }, [])
  
  useEffect(() => {
    saveData(carts)
  }, [carts])

  const addProductToCart =  async (products) => {
    const getdata = await getData().then(value => value)
    const dataCheck = await getdata.find(data=>{
      return data.products.id === products.id
    })
    if(dataCheck){
        alert("Product is Existed")
    }
    else{
      setCarts(carts.concat({ products: products, quantity: 1 }));
    }
    
  }
  const incrQuantity = (productID) => {
    const newCartArr = carts.map(e => {
      if (e.products.id !== productID) { return e }
      // else  return {products :e.products , quantity : e.quantity +1}
      return {  products: e.products, quantity: e.quantity + 1 }
    })
    setCarts(newCartArr);
  }
  const decrQuantity = (productID) => {
    const newCartArr = carts.map(e => {
      if (e.products.id === productID) {
        return { products: e.products, quantity: e.quantity - 1 }
      }
      return e
    })
    setCarts(newCartArr)
  };
  const deleteCart = (indexCart) => {
    const newCartArr = carts.filter((e, index)=> {
      return indexCart !== index;
    })
    setCarts(newCartArr)
  }

  global.addProductToCart = addProductToCart;
  global.incrQuantity = incrQuantity;
  global.decrQuantity = decrQuantity;
  global.deleteCart = deleteCart;

  const goToSearch = ()=>{
    navigation.navigate("Search")
  }
  global.clickSearch =goToSearch
  const openDrawer = () => navigation.openDrawer();
  return (

    <SafeAreaView style={{ flex: 1, }}>
      <Header openDrawer={openDrawer} />

      <Tab.Navigator
        screenOptions={{ headerShown: false, tabBarActiveTintColor: COLOR.primary }}>
        <Tab.Screen
          options={{
            tabBarIcon: (tabInfo) => {
              return (
                <Ionicons name='home-sharp'
                  size={SPACING * 2.7}
                  color={tabInfo.focused ? COLOR.primary : 'gray'}
                />
              )
            }
          }}
          name="Home" >
          {(props) => <Home {...props} types={types} topProducts={topProducts} />}
        </Tab.Screen>
        <Tab.Screen
          options={{
            tabBarBadge: carts.length !== 0 ? carts.length : null,
            tabBarBadgeStyle: { color: COLOR.white },
            tabBarIcon: (tabInfo) => {
              return (
                <Ionicons name='cart'
                  size={SPACING * 2.7}
                  color={tabInfo.focused ? COLOR.primary : 'gray'}
                />
              )
            }
          }}
          name="Cart" >
          {(props) => <Cart {...props} carts={carts}></Cart>}

        </Tab.Screen>
        <Tab.Screen
          options={{
            tabBarIcon: (tabInfo) => {
              return (
                <Ionicons name='information'
                  size={SPACING * 2.7}
                  color={tabInfo.focused ? COLOR.primary : 'gray'}

                />
              )
            }
          }}
          name="Contact" component={Contact} />

        <Tab.Screen
          options={{
            tabBarIcon: (tabInfo) => {
              return (
                <Ionicons name='search'
                  size={SPACING * 2.7}
                  color={tabInfo.focused ? COLOR.primary : 'gray'}
                />
              )
            }
          }}
          name="Search" component={Search} />
      </Tab.Navigator>
    </SafeAreaView>

  );
};

// define your styles


//make this component available to the app
export default Shop;
