import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Authencation from './src/component/Authencation/Authencation';
import Changeinfo from './src/component/ChangeInfo/Changinfo';
import Main from './src/component/Main/Main';
import OrderHistory from './src/component/OrderHistory/OrderHistory';
import COLOR from './src/config/COLOR';



export default function App() {
  return (
    <View style={{flex:1, backgroundColor:COLOR.primary}}>
      <Main/>
    </View>
    
    
  );
}
