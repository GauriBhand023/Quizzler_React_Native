import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Home from './screens/home';
import Quize from './screens/quiz'
import Result from './screens/result'
import MyStack from './Navigation';

const App = () => {
  return (
    <NavigationContainer>
        <MyStack/>
    </NavigationContainer>

  )
}

export default App

const styles = StyleSheet.create({
  container:{
    padding: 40,
    paddingHorizontal: 16,
  },
});