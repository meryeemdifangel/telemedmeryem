import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

const RadioButton = ({ onPress, selected, children }) => {
    return (
      <View style={styles.radioButtonContainer}>
        <TouchableOpacity onPress={onPress} style={styles.radioButton}>
          {selected ? <View style={styles.radioButtonIcon} /> : null}
        </TouchableOpacity>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.radioButtonText}>{children}</Text>
        </TouchableOpacity>
      </View>
    );
  };

const radioStyle = StyleSheet.create({
    btn: {
        flexDirection: 'row', alignItems: 'center', backgroundColor: '#c36e02', borderRadius: 15, padding: 15
    },
    leftImg: { height: 40, width: 40, marginRight: 30, tintColor: 'white', resizeMode: 'contain' },
    txt: { fontSize: 30, color: 'white' },
    tick: { position: 'absolute', right: 0, height: 30, width: 30, marginRight: 30, tintColor: 'white' }
});