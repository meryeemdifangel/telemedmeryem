import React, { useState } from "react";
import { View } from "react-native";
import { TextInput, Text } from "react-native-paper";
import { Test } from "./Test";

/** @param {{onChange: (data: any) => void}} props */
export default function Phones(props) {
  const [data, setData] = useState({
    phone: "",
    mobile: "",
    skype: "",
  });

  const onDataChange = (newData) => {
    setData(newData);
    props.onChange(newData);
  };

  return (
    <>
     <Test/>
      <TextInput
        dense
        mode="outlined"
        value={data.mobile}
        label="mobile"
        style={{ margin: 4 }}
        onChangeText={(mobile => onDataChange({ ...data, mobile}))}
      />
      <TextInput
        dense
        mode="outlined"
        style={{ margin: 4 }}
        value={data.skype}
        label="skype"
        onChangeText={(skype) => onDataChange({ ...data, skype })}
      />
    </>
  );
}
