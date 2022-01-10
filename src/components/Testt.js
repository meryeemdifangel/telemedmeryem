import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Text,
} from "react-native";
import PhoneInput from "react-native-phone-number-input";
import { Colors } from "react-native/Libraries/NewAppScreen";

export function Test() {
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef(null);
  return (
    <>
      <StatusBar barStyle="dark-content"  />
      <View style={styles.container}>
        <SafeAreaView style={styles.wrapper}>
          <PhoneInput
            ref={phoneInput}
            defaultValue={value}
            defaultCode="DM"
            layout="first"
            onChangeText={(text) => {
              setValue(text);
              setShowMessage(false);
            }}
            onChangeFormattedText={(text) => {
              setFormattedValue(text);
            }}
            withDarkTheme
            withShadow
            autoFocus
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              const checkValid = phoneInput.current?.isValidNumber(value);
              setShowMessage(true);
              setValid(checkValid ? checkValid : false);
            }}
          >
            <Text style={{alignItems:'center' }} >Check</Text>
          </TouchableOpacity>
      
        </SafeAreaView>
        {showMessage && (
            <View style={styles.message}>
              <Text>Value : {value}</Text>
              <Text>Formatted Value : {formattedValue}</Text>
              <Text>Valid : {valid ? "true" : "false"}</Text>
            </View>
          )}
      </View>
    </>
  );
};

let styles = StyleSheet.create({
    phoneNumberView: {
        width: '80%',
        height: 50,
        backgroundColor: 'white'
      },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  
  },
  message: {
    // width: 200,
    borderRadius: 5,
    backgroundColor: "lightblue",
    paddingHorizontal: 20,
    paddingVertical: 30,
    marginTop: 20
  },
  button: {
    marginTop: 20,
    padding: 10,
    alignItems :'center'

  },
  wrapper: {
    borderColor: 'lightblue',
    borderWidth: 3,
    paddingHorizontal: 3,
    paddingVertical: 3,

    
  },
});

