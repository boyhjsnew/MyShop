import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { View } from 'react-native';

import Main from './src/component/Main/Main';

import COLOR from './src/config/COLOR';
import refreshToken from './src/Api/Refreshtoken';


export default function App() {

  useEffect(()=>{
    const a =setInterval(refreshToken ,300000)
    return ()=> {clearInterval(a)};
  
  })
  return (
    <View style={{flex:1, backgroundColor:COLOR.primary}}>
      <Main/>
    </View>
  );
}
