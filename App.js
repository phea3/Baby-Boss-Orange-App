import { StyleSheet, Text, View, Button, Alert, Pressable, Dimensions, SafeAreaView } from 'react-native';
import { Image } from 'expo-image';
import React, { Component, useState } from 'react'
import Start from './screens/Start.js';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FormLogin from './screens/FormLogin.js';
import FormMenu from './screens/FormMenu.js';
import DetailView from './screens/DetailView.js';

const { width } = Dimensions.get('window')
const Stack = createStackNavigator();

export default function App() {
  const [splash, setSplash] = useState(false)
  BenButonum=()=>{
    Alert.alert('Ben Butonum');
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Get Start" component={Start} options={{title: 'Welcome'}}/>
        <Stack.Screen name="FormLogin" component={FormLogin} options={{title: 'Sign in'}}/>
        <Stack.Screen name="Menu" component={FormMenu} options={{title: 'Dashboard'}}/>
        <Stack.Screen name="Detail" component={DetailView} options={{title: 'DetailView'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
