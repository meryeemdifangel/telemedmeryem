import React, { useState } from "react";
import { View } from "react-native";
import { TextInput, Text } from "react-native-paper";
import { Test } from "./Testt";

/** @param {{onChange: (data: any) => void}} props */
export default function Address(props) {
  const [data, setData] = useState({
    address1: "",
    address2: "",
    address3: "",
    state: "",
    city: "",
    country: "",
    zipcode: "",
  });

  const onDataChange = (newData) => {
    setData(newData);
    props.onChange(newData);
  };

  return (
    <>
      <TextInput
        dense
        mode="outlined"
        value={data.address1}
        label="Address Line 1"
        style={{ margin: 4  }}
        onChangeText={(address1) => onDataChange({ ...data, address1 })}
      />
 
      <TextInput
        dense
        mode="outlined"
        value={data.address2}
        label="Address Line 2"
        style={{   margin: 4  }}
        onChangeText={(address2) => onDataChange({ ...data, address2 })}
      />
 
  
      <TextInput
        dense
        mode="outlined"
        style={{ margin: 4 }}
        value={data.address3}
        label="Address Line 3 "
        onChangeText={(address3) => onDataChange({ ...data, address3 })}
      />
      <View style={{ flexDirection: "row" }}>
        <TextInput
          dense
          mode="outlined"
          value={data.city}
          label="City"
          style={{ flexGrow: 1, margin: 4 }}
          onChangeText={(city) => onDataChange({ ...data, city })}
        />
        <TextInput
          dense
          mode="outlined"
          value={data.zipcode}
          label="Zipcode"
          style={{ flexGrow: 0.4, margin: 4 }}
          onChangeText={(zipcode) => onDataChange({ ...data, zipcode })}
        />
      </View>
      <TextInput
        dense
        mode="outlined"
        value={data.state}
        label="State"
        style={{ margin: 4, flexGrow: 0.5 }}
        onChangeText={(state) => onDataChange({ ...data, state })}
      />
      <View
        style={{
         
          justifyContent: "center",
          margin: 4,
          borderWidth: 1,
          borderColor: 'gray',
          backgroundColor: '#F5F5F5',
          borderRadius: 7,

          flex:1

        }}
      >
        <Text style={{color:'gray' , justifyContent:'flex-start', margin:14 ,fontSize:15 }} >Country</Text>
      <Test />
      </View>
    </>
  );
}
