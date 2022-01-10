
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

import { Picker } from "@react-native-picker/picker";
import { Button, Pressable, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
export default function DownloadPicker() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [country, setCountry] = useState(null);

  const [items, setItems] = useState([
    { label: 'xls', value: 'xls' },
    { label: 'pdf', value: 'pdf' },
    { label: 'csv', value: 'csv' }
  ]);
  return (


    <View


      style={{
        width: "100%",
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'transparent',
        color: 'black',
        marginTop: 10,
      }}>
      <Picker
        selectedValue={value}
        onValueChange={(value, index) => setValue(value)}
        mode="dropdown" // Android only
        style={styles.picker}
      >
        <Picker.Item label="" value="" />
        <Picker.Item label="pdf" value="pdf" />
        <Picker.Item label="csv" value="csv" />
        <Picker.Item label="xls" value="xls" />
      </Picker>
    </View>



  );
}


const styles = StyleSheet.create({
  filterPicker: {
    height: '100%',
    width: '100%',
    borderWidth: 6,
    borderStyle: 'solid',
    borderColor: 'black',
    backgroundColor: 'transparent',
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',

  },
  picker: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    backgroundColor: 'transparent',


  },
  button: {
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    borderRadius: 4,
    elevation: 3,
  },
  butt: {
    backgroundColor: 'red'
  },
  text: {
    fontSize: 8,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },

});

