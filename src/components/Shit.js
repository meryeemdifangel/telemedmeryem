

import { MaterialIcons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, View, Text} from 'react-native';
import {Icon} from 'react-native-elements';

import { useState, useEffect } from 'react';





export default function Shit() {
 


  return (

<View style={styles.Container}>
        <View style={styles.Container}>
          <TouchableOpacity style={styles.left}>
            <TouchableOpacity
             
              delayPressIn={0}
              style={styles.icon}>
              <Icon
                name={'arrow-back-outline'}
                type="ionicon"
                color={this.props.color?this.props.color:"#0007"}
                size={35}
              />
            </TouchableOpacity>
          </TouchableOpacity>
          <View style={styles.middle}>
            <Text style={styles.TextFont}>{this.props.Text}</Text>
          </View>
          <View style={styles.Right}>
      
          <TouchableOpacity style={{width:'100%' }} >
            <MaterialIcons name="search" size={30} style={styles.iconSearch} />
          </TouchableOpacity>

          </View>
        </View>
      </View>
  );
}

{/*
  if u wanna see the navbar and the download icon and table buttons 
  copy and paste this code
    <View style={{flex:1}}>
    
      <Navbar />
 <TableElements/>
    </View>
*/}

const styles = StyleSheet.create({
    Container: {
      backgroundColor: '#00B7DD',
      width: '100%',
      height: h('7%'),
      flexDirection: 'row',
    },
    left: {
      width: '20%',
      height: '100%',
    },
    middle: {
      width: '60%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Right: {
    width: '20%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  iconSearch: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',

  },
  TextFont: {
    color: 'white',
    fontSize: h('3.2%'),
    fontWeight: 'bold',
  },
  icon: {
    // backgroundColor: 'tomato',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});


  