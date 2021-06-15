import 'react-native-gesture-handler';
import React from 'react';

import {StyleSheet, View} from 'react-native';

import { NavigationContainer} from '@react-navigation/native';
import  {AuthProvider} from './contexts/auth';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes/>
      </AuthProvider>  
    </NavigationContainer>
  )
}
const styles= StyleSheet.create({
  container:{
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text:{
    fontSize: 32,
    color: 'black',
  }
});

export default App;