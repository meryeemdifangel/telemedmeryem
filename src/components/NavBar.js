import { StatusBar } from 'expo-status-bar';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import { Picker } from "@react-native-picker/picker";
import { useState } from 'react';

export default function Navbar() {
  const [value, setValue] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.containerBtn}>
        <Pressable style={styles.button} style={{
          backgroundColor: '#2f2', width: '20%', height: 30,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 4,
          elevation: 3,
        }} >
          <Text style={styles.text}>Active</Text>
        </Pressable>
        <Pressable style={styles.button} style={{
          backgroundColor: '#888', width: '20%', height: 30,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 4,
          elevation: 3,
        }} >
          <Text style={styles.text}>Archived</Text>
        </Pressable>
        <Pressable style={styles.button} style={{
          backgroundColor: '#f22', width: '20%', height: 30,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 4,
          elevation: 3,
        }}  >
          <Text style={styles.text}>Banned</Text>
        </Pressable>
        <Pressable style={styles.button} style={{
          backgroundColor: '#222', width: '20%', height: 30,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 4,
          elevation: 3,
        }} >
          <Text style={styles.text}>Deleted</Text>
        </Pressable>
        <Pressable style={styles.button} style={{
          backgroundColor: '#07f', width: '20%', height: 30,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 4,
          elevation: 3,
        }}>
          <Text style={styles.text}>All</Text>
        </Pressable>
      </View>
      <View
        style={{
          width: '25%',
          height: '25%',
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 1,
          borderRadius: 5,
          backgroundColor: '#999999',
          borderColor: 'transparent'
        }}>
        <Picker
          selectedValue={value}
          onValueChange={(value, index) => setValue(value)}
          mode="dropdown" // Android only
          style={styles.picker}
        >
          <Picker.Item label="options" value="" />
          <Picker.Item label="📝 First Name" value="firstName" />
          <Picker.Item label="📝 Last Name" value="lastName" />
          <Picker.Item label="📝 Country" value="country" />
          <Picker.Item label="📝 City" value="city" />
          <Picker.Item label="📝 Age" value="age" />
          <Picker.Item label="📝 Profile" value="profile" />
        </Picker>
      </View>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '15%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: "row",
    paddingLeft: 5,
    paddingRight: 5
  },
  containerBtn: {
    width: '45%',
    height: '30%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: "row",


  },
  picker: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },

  text: {
    fontSize: 7,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',

  },
});
