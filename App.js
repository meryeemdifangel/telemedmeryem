
import React, {useState, useRef} from 'react';

import { View, Text, Alert, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import PhoneInput from 'react-native-phone-number-input';
import Address from './src/components/Address'
import Phones from './src/components/Phones'
import NavBar from './src/components/NavBar'

import PlanAndScheduleScreen, { Card } from './src/components/PlanAndScheduleScreen'
import { Test } from './src/components/Testt'
import skills  from './assets/icons/skills.png'
import ActivityIndicator from './src/components/ActivityIndicator';
import {OperationsAccountant} from './src/components/users/OperationsAccountant';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigation } from './src/components/Stack';
const Stack = createStackNavigator();
export default function App() {
 
  const [phoneNumber, setPhoneNumber] = useState('');
 
  const phoneInput = useRef(null);
 
  const getPhoneNumber = () => {
    Alert.alert(phoneNumber);
  };
 
  return (
<StackNavigation />
    );
};
 
const styleSheet = StyleSheet.create({
 
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
 
  heading:{
    fontSize: 24,
    textAlign: 'center',
    paddingBottom: 20,
    color: 'black'
  },
 
  phoneNumberView: {
    width: '80%',
    height: 50,
    backgroundColor: 'white'
  },
 
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    width: '80%',
    padding: 8,
    backgroundColor: '#00B8D4',
  },
 
  buttonText:{
    fontSize: 20,
    textAlign: 'center',
    color: 'white'
  }
});