import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';

import Main from './src/component/Main/Main';

import COLOR from './src/config/COLOR';


export default function App() {
  return (
    <View style={{flex:1, backgroundColor:COLOR.primary}}>
      <Main/>
    </View>
  );
}
