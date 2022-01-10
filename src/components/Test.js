



import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';

import { Picker } from "@react-native-picker/picker";
import { Button, Dimensions, Pressable, ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';

import { DataTable } from 'react-native-paper';
import { CheckBox } from 'react-native-elements/dist/checkbox/CheckBox';
import TableElements from './TableElements';
import DownloadPicker from './TableElements';
const optionsPerPage = [2, 3, 4];


export  function Test() {
  const [value, setValue] = useState(null);
  const [country, setCountry] = useState(null);
  const [page, setPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(optionsPerPage[0]);
  const [items, setItems] = useState([
    { label: 'xls', value: 'xls' },
    { label: 'pdf', value: 'pdf' },
    { label: 'csv', value: 'csv' }
  ]);
  const [checkedComment, toggleCheckedComment] = useState(false);



  useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);
  let screenwidth=Dimensions.get('window').width
  let screenheight=Dimensions.get('window').height

  return (
<ScrollView horizontal={true} >
<DataTable style={{width:screenwidth  }} >
      <DataTable.Header>
      <DataTable.Title style={styles.header1} > <Text style={styles.tableHeading}></Text></DataTable.Title>
                    <DataTable.Title style={styles.header} > <Text style={styles.tableHeading} >Username</Text></DataTable.Title>
                    <DataTable.Title style={styles.header} > <Text style={styles.tableHeading} >Email</Text></DataTable.Title>
                    <DataTable.Title style={styles.header} > <Text style={styles.tableHeading} >First name</Text></DataTable.Title>
     <DataTable.Title style={styles.header} > <Text style={styles.tableHeading} >User groupe</Text></DataTable.Title>
                    <DataTable.Title style={styles.header} > <Text style={styles.tableHeading} >Last Name</Text></DataTable.Title>
                    <DataTable.Title style={styles.header} > <Text style={styles.tableHeading} >Status</Text></DataTable.Title>
   
              </DataTable.Header>
      <DataTable.Row style={{ backgroundColor: '#F5F5F5', }}>
      <DataTable.Cell style={{  alignItems: 'center', justifyContent: 'center' }}>

      <CheckBox
            title=""
            checked={checkedComment}
            onPress={() => toggleCheckedComment(!checkedComment)}
            containerStyle={{alignItems: 'center', justifyContent: 'center',backgroundColor: 'transparent', borderColor: 'transparent'  , height: '100%', }}
          />
        </DataTable.Cell>
        <DataTable.Cell style={{ borderLeftColor: 'lightgray', borderLeftWidth: 1, alignItems: 'center', justifyContent: 'center', }}>
          <Text
            style={{ alignItems: 'center', fontSize: 10, justifyContent: 'center', }}>
            charlie
          </Text>
        </DataTable.Cell>
        <DataTable.Cell style={{ borderLeftColor: 'lightgray', borderLeftWidth: 1, alignItems: 'center', justifyContent: 'center', }}>
          <Text
            style={{ alignItems: 'center', fontSize: 10, justifyContent: 'center', }}>
            charlie
          </Text>
        </DataTable.Cell>
        <DataTable.Cell style={{ borderLeftColor: 'lightgray', borderLeftWidth: 1, alignItems: 'center', justifyContent: 'center', }}>
          <Text
            style={{ alignItems: 'center', fontSize: 10, justifyContent: 'center', }}>
            charlie
          </Text>
        </DataTable.Cell>
        <DataTable.Cell style={{ borderLeftColor: 'lightgray', borderLeftWidth: 1, alignItems: 'center', justifyContent: 'center', }}>
          <Text
            style={{ alignItems: 'center', fontSize: 10, justifyContent: 'center', }}>
            _
          </Text>
        </DataTable.Cell>

        <DataTable.Cell style={{ borderLeftColor: 'lightgray', borderLeftWidth: 1, alignItems: 'center', justifyContent: 'center', }}>
          <Text
            style={{ alignItems: 'center', fontSize: 10, justifyContent: 'center', }}>
            _
          </Text>
        </DataTable.Cell>
        <DataTable.Cell style={{ borderLeftColor: 'lightgray', borderLeftWidth: 1, alignItems: 'center', justifyContent: 'center', }}>
        <Pressable style={{
          backgroundColor: '#2f2', width:30, height: '50%',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 4,
          elevation: 3,
        }} >
          <Text style={styles.text}>Active</Text>
        </Pressable> 
        </DataTable.Cell>
        </DataTable.Row>


        <DataTable.Row >
      <DataTable.Cell style={{  alignItems: 'center', justifyContent: 'center' }}>

      <CheckBox
            title=""
            checked={checkedComment}
            onPress={() => toggleCheckedComment(!checkedComment)}
            containerStyle={{alignItems: 'center', justifyContent: 'center',backgroundColor: 'transparent', borderColor: 'transparent'  , height: '100%', }}
          />
        </DataTable.Cell>
        <DataTable.Cell style={{ borderLeftColor: 'lightgray', borderLeftWidth: 1, alignItems: 'center', justifyContent: 'center', }}>
          <Text
            style={{ alignItems: 'center', fontSize: 10, justifyContent: 'center', }}>
            charlie
          </Text>
        </DataTable.Cell>
        <DataTable.Cell style={{ borderLeftColor: 'lightgray', borderLeftWidth: 1, alignItems: 'center', justifyContent: 'center', }}>
          <Text
            style={{ alignItems: 'center', fontSize: 10, justifyContent: 'center', }}>
            charlie
          </Text>
        </DataTable.Cell>
        <DataTable.Cell style={{ borderLeftColor: 'lightgray', borderLeftWidth: 1, alignItems: 'center', justifyContent: 'center', }}>
          <Text
            style={{ alignItems: 'center', fontSize: 10, justifyContent: 'center', }}>
            charlie
          </Text>
        </DataTable.Cell>
        <DataTable.Cell style={{ borderLeftColor: 'lightgray', borderLeftWidth: 1, alignItems: 'center', justifyContent: 'center', }}>
          <Text
            style={{ alignItems: 'center', fontSize: 10, justifyContent: 'center', }}>
            _
          </Text>
        </DataTable.Cell>

        <DataTable.Cell style={{ borderLeftColor: 'lightgray', borderLeftWidth: 1, alignItems: 'center', justifyContent: 'center', }}>
          <Text
            style={{ alignItems: 'center', fontSize: 10, justifyContent: 'center', }}>
            _
          </Text>
        </DataTable.Cell>
        <DataTable.Cell style={{ borderLeftColor: 'lightgray', borderLeftWidth: 1, alignItems: 'center', justifyContent: 'center', }}>
        <Pressable style={{
          backgroundColor: '#888', width:30, height: '50%',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 4,
          elevation: 3,
        }} >
          <Text style={styles.text}>Archived</Text>
        </Pressable> 
        </DataTable.Cell>
        </DataTable.Row>


        <DataTable.Row style={{ backgroundColor: '#F5F5F5'}}>
      <DataTable.Cell style={{  alignItems: 'center', justifyContent: 'center' }}>

      <CheckBox
            title=""
            checked={checkedComment}
            onPress={() => toggleCheckedComment(!checkedComment)}
            containerStyle={{alignItems: 'center', justifyContent: 'center',backgroundColor: 'transparent', borderColor: 'transparent'  , height: '100%', }}
          />
        </DataTable.Cell>
        <DataTable.Cell style={{ borderLeftColor: 'lightgray', borderLeftWidth: 1, alignItems: 'center', justifyContent: 'center', }}>
          <Text
            style={{ alignItems: 'center', fontSize: 10, justifyContent: 'center', }}>
            charlie
          </Text>
        </DataTable.Cell>
        <DataTable.Cell style={{ borderLeftColor: 'lightgray', borderLeftWidth: 1, alignItems: 'center', justifyContent: 'center', }}>
          <Text
            style={{ alignItems: 'center', fontSize: 10, justifyContent: 'center', }}>
            charlie
          </Text>
        </DataTable.Cell>
        <DataTable.Cell style={{ borderLeftColor: 'lightgray', borderLeftWidth: 1, alignItems: 'center', justifyContent: 'center', }}>
          <Text
            style={{ alignItems: 'center', fontSize: 10, justifyContent: 'center', }}>
            charlie
          </Text>
        </DataTable.Cell>
        <DataTable.Cell style={{ borderLeftColor: 'lightgray', borderLeftWidth: 1, alignItems: 'center', justifyContent: 'center', }}>
          <Text
            style={{ alignItems: 'center', fontSize: 10, justifyContent: 'center', }}>
            _
          </Text>
        </DataTable.Cell>

        <DataTable.Cell style={{ borderLeftColor: 'lightgray', borderLeftWidth: 1, alignItems: 'center', justifyContent: 'center', }}>
          <Text
            style={{ alignItems: 'center', fontSize: 10, justifyContent: 'center', }}>
            _
          </Text>
        </DataTable.Cell>
        <DataTable.Cell style={{ borderLeftColor: 'lightgray', borderLeftWidth: 1, alignItems: 'center', justifyContent: 'center', }}>
        <Pressable style={{
          backgroundColor: '#f22', width:30, height: '50%',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 4,
          elevation: 3,
        }} >
          <Text style={styles.text}>Banned</Text>
        </Pressable> 
        </DataTable.Cell>
        </DataTable.Row>


        <DataTable.Row   >
      <DataTable.Cell style={{  alignItems: 'center', justifyContent: 'center' }}>

      <CheckBox
            title=""
            checked={checkedComment}
            onPress={() => toggleCheckedComment(!checkedComment)}
            containerStyle={{alignItems: 'center', justifyContent: 'center',backgroundColor: 'transparent', borderColor: 'transparent'  , height: '100%', }}
          />
        </DataTable.Cell>
        <DataTable.Cell style={{ borderLeftColor: 'lightgray', borderLeftWidth: 1, alignItems: 'center', justifyContent: 'center', }}>
          <Text
            style={{ alignItems: 'center', fontSize: 10, justifyContent: 'center', }}>
            charlie
          </Text>
        </DataTable.Cell>
        <DataTable.Cell style={{ borderLeftColor: 'lightgray', borderLeftWidth: 1, alignItems: 'center', justifyContent: 'center', }}>
          <Text
            style={{ alignItems: 'center', fontSize: 10, justifyContent: 'center', }}>
            charlie
          </Text>
        </DataTable.Cell>
        <DataTable.Cell style={{ borderLeftColor: 'lightgray', borderLeftWidth: 1, alignItems: 'center', justifyContent: 'center', }}>
          <Text
            style={{ alignItems: 'center', fontSize: 10, justifyContent: 'center', }}>
            charlie
          </Text>
        </DataTable.Cell>
        <DataTable.Cell style={{ borderLeftColor: 'lightgray', borderLeftWidth: 1, alignItems: 'center', justifyContent: 'center', }}>
          <Text
            style={{ alignItems: 'center', fontSize: 10, justifyContent: 'center', }}>
            _
          </Text>
        </DataTable.Cell>

        <DataTable.Cell style={{ borderLeftColor: 'lightgray', borderLeftWidth: 1, alignItems: 'center', justifyContent: 'center', }}>
          <Text
            style={{ alignItems: 'center', fontSize: 10, justifyContent: 'center', }}>
            _
          </Text>
        </DataTable.Cell>
        <DataTable.Cell style={{ borderLeftColor: 'lightgray', borderLeftWidth: 1, alignItems: 'center', justifyContent: 'center', }}>
        <Pressable style={{
          backgroundColor: '#222', width:30, height: '50%',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 4,
          elevation: 3,
        }} >
          <Text style={styles.text}>Deleted</Text>
        </Pressable> 
        </DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{ backgroundColor: '#F5F5F5'}}>
      <DataTable.Cell style={{  alignItems: 'center', justifyContent: 'center' }}>

      <CheckBox
            title=""
            checked={checkedComment}
            onPress={() => toggleCheckedComment(!checkedComment)}
            containerStyle={{alignItems: 'center', justifyContent: 'center',backgroundColor: 'transparent', borderColor: 'transparent'  , height: '100%', }}
          />
        </DataTable.Cell>
        <DataTable.Cell style={{ borderLeftColor: 'lightgray', borderLeftWidth: 1, alignItems: 'center', justifyContent: 'center', }}>
          <Text
            style={{ alignItems: 'center', fontSize: 10, justifyContent: 'center', }}>
            charlie
          </Text>
        </DataTable.Cell>
        <DataTable.Cell style={{ borderLeftColor: 'lightgray', borderLeftWidth: 1, alignItems: 'center', justifyContent: 'center', }}>
          <Text
            style={{ alignItems: 'center', fontSize: 10, justifyContent: 'center', }}>
            charlie
          </Text>
        </DataTable.Cell>
        <DataTable.Cell style={{ borderLeftColor: 'lightgray', borderLeftWidth: 1, alignItems: 'center', justifyContent: 'center', }}>
          <Text
            style={{ alignItems: 'center', fontSize: 10, justifyContent: 'center', }}>
            charlie
          </Text>
        </DataTable.Cell>
        <DataTable.Cell style={{ borderLeftColor: 'lightgray', borderLeftWidth: 1, alignItems: 'center', justifyContent: 'center', }}>
          <Text
            style={{ alignItems: 'center', fontSize: 10, justifyContent: 'center', }}>
            _
          </Text>
        </DataTable.Cell>

        <DataTable.Cell style={{ borderLeftColor: 'lightgray', borderLeftWidth: 1, alignItems: 'center', justifyContent: 'center', }}>
          <Text
            style={{ alignItems: 'center', fontSize: 10, justifyContent: 'center', }}>
            _
          </Text>
        </DataTable.Cell>
        <DataTable.Cell style={{ borderLeftColor: 'lightgray', borderLeftWidth: 1, alignItems: 'center', justifyContent: 'center', }}>
        <Pressable style={{
          backgroundColor: '#07f', width:30, height: '50%',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 4,
          elevation: 3,
        }} >
          <Text style={styles.text}>All</Text>
        </Pressable> 
        </DataTable.Cell>
        </DataTable.Row>

 

<DataTable.Pagination
  page={page}
  numberOfPages={3}
  onPageChange={(page) => setPage(page)}
  label="1-2 of 6"
  optionsPerPage={optionsPerPage}
  itemsPerPage={itemsPerPage}
  setItemsPerPage={setItemsPerPage}
  showFastPagination
  optionsLabel={'Rows per page'}
/>
</DataTable>





<DataTable style={{width:screenwidth ,  }} >
      <DataTable.Header>
      <DataTable.Title style={styles.header} > <Text style={styles.tableHeading}></Text></DataTable.Title>
                    <DataTable.Title style={styles.header} > <Text style={styles.tableHeading} >Username</Text></DataTable.Title>
                    <DataTable.Title style={styles.header} > <Text style={styles.tableHeading} >Email</Text></DataTable.Title>
                    <DataTable.Title style={styles.header} > <Text style={styles.tableHeading} >First name</Text></DataTable.Title>
     <DataTable.Title style={styles.header} > <Text style={styles.tableHeading} >User groupe</Text></DataTable.Title>
                    <DataTable.Title style={styles.header} > <Text style={styles.tableHeading} >Last Name</Text></DataTable.Title>
                    <DataTable.Title style={styles.header} > <Text style={styles.tableHeading} >Status</Text></DataTable.Title>
   
              </DataTable.Header>
      <DataTable.Row style={{ backgroundColor: '#F5F5F5' }}>
      <DataTable.Cell style={{ borderLeftColor: 'lightgray', borderLeftWidth: 1,  alignItems: 'center', justifyContent: 'center' }}>

   
        </DataTable.Cell>
        <DataTable.Cell style={{ borderLeftColor: 'lightgray', borderLeftWidth: 1, alignItems: 'center', justifyContent: 'center', }}>
          <Text
            style={{ alignItems: 'center', fontSize: 10, justifyContent: 'center', }}>
            charlie
          </Text>
        </DataTable.Cell>
        <DataTable.Cell style={{ borderLeftColor: 'lightgray', borderLeftWidth: 1, alignItems: 'center', justifyContent: 'center', }}>
          <Text
            style={{ alignItems: 'center', fontSize: 10, justifyContent: 'center', }}>
            charlie
          </Text>
        </DataTable.Cell>
        <DataTable.Cell style={{ borderLeftColor: 'lightgray', borderLeftWidth: 1, alignItems: 'center', justifyContent: 'center', }}>
          <Text
            style={{ alignItems: 'center', fontSize: 10, justifyContent: 'center', }}>
            charlie
          </Text>
        </DataTable.Cell>
        <DataTable.Cell style={{ borderLeftColor: 'lightgray', borderLeftWidth: 1, alignItems: 'center', justifyContent: 'center', }}>
          <Text
            style={{ alignItems: 'center', fontSize: 10, justifyContent: 'center', }}>
            _
          </Text>
        </DataTable.Cell>

        <DataTable.Cell style={{ borderLeftColor: 'lightgray', borderLeftWidth: 1, alignItems: 'center', justifyContent: 'center', }}>
        <TableElements/>

        </DataTable.Cell>
        <DataTable.Cell style={{ borderLeftColor: 'lightgray', borderLeftWidth: 1, alignItems: 'center', justifyContent: 'center', }}>
        <Pressable style={{
          backgroundColor: '#2f2', width:30, height: '50%',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 4,
          elevation: 3,
        }} >
          <Text style={styles.text}>Active</Text>
        </Pressable> 
        </DataTable.Cell>
        </DataTable.Row>


        <DataTable.Row>
      <DataTable.Cell style={{borderLeftColor: 'lightgray', borderLeftWidth: 1,  alignItems: 'center', justifyContent: 'center' }}>

   
        </DataTable.Cell>
        <DataTable.Cell style={{ borderLeftColor: 'lightgray', borderLeftWidth: 1, alignItems: 'center', justifyContent: 'center', }}>
          <Text
            style={{ alignItems: 'center', fontSize: 10, justifyContent: 'center', }}>
            charlie
          </Text>
        </DataTable.Cell>
        <DataTable.Cell style={{ borderLeftColor: 'lightgray', borderLeftWidth: 1, alignItems: 'center', justifyContent: 'center', }}>
          <Text
            style={{ alignItems: 'center', fontSize: 10, justifyContent: 'center', }}>
            charlie
          </Text>
        </DataTable.Cell>
        <DataTable.Cell style={{ borderLeftColor: 'lightgray', borderLeftWidth: 1, alignItems: 'center', justifyContent: 'center', }}>
          <Text
            style={{ alignItems: 'center', fontSize: 10, justifyContent: 'center', }}>
            charlie
          </Text>
        </DataTable.Cell>
        <DataTable.Cell style={{ borderLeftColor: 'lightgray', borderLeftWidth: 1, alignItems: 'center', justifyContent: 'center', }}>
          <Text
            style={{ alignItems: 'center', fontSize: 10, justifyContent: 'center', }}>
            _
          </Text>
        </DataTable.Cell>

        <DataTable.Cell style={{ borderLeftColor: 'lightgray', borderLeftWidth: 1, alignItems: 'center', justifyContent: 'center', }}>
        <DownloadPicker />

        </DataTable.Cell>
        <DataTable.Cell style={{ borderLeftColor: 'lightgray', borderLeftWidth: 1, alignItems: 'center', justifyContent: 'center', }}>
        <Pressable style={{
          backgroundColor: '#888', width:30, height: '50%',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 4,
          elevation: 3,
        }} >
          <Text style={styles.text}>Archived</Text>
        </Pressable> 
        </DataTable.Cell>
        </DataTable.Row>


        <DataTable.Row style={{ backgroundColor: '#F5F5F5' }}>
      <DataTable.Cell style={{borderLeftColor: 'lightgray', borderLeftWidth: 1,  alignItems: 'center', justifyContent: 'center' }}>

  
        </DataTable.Cell>
        <DataTable.Cell style={{ borderLeftColor: 'lightgray', borderLeftWidth: 1, alignItems: 'center', justifyContent: 'center', }}>
          <Text
            style={{ alignItems: 'center', fontSize: 10, justifyContent: 'center', }}>
            charlie
          </Text>
        </DataTable.Cell>
        <DataTable.Cell style={{ borderLeftColor: 'lightgray', borderLeftWidth: 1, alignItems: 'center', justifyContent: 'center', }}>
          <Text
            style={{ alignItems: 'center', fontSize: 10, justifyContent: 'center', }}>
            charlie
          </Text>
        </DataTable.Cell>
        <DataTable.Cell style={{ borderLeftColor: 'lightgray', borderLeftWidth: 1, alignItems: 'center', justifyContent: 'center', }}>
          <Text
            style={{ alignItems: 'center', fontSize: 10, justifyContent: 'center', }}>
            charlie
          </Text>
        </DataTable.Cell>
        <DataTable.Cell style={{ borderLeftColor: 'lightgray', borderLeftWidth: 1, alignItems: 'center', justifyContent: 'center', }}>
          <Text
            style={{ alignItems: 'center', fontSize: 10, justifyContent: 'center', }}>
            _
          </Text>
        </DataTable.Cell>

        <DataTable.Cell style={{ borderLeftColor: 'lightgray', borderLeftWidth: 1, alignItems: 'center', justifyContent: 'center', }}>
        <DownloadPicker/>

        </DataTable.Cell>
        <DataTable.Cell style={{ borderLeftColor: 'lightgray', borderLeftWidth: 1, alignItems: 'center', justifyContent: 'center', }}>
        <Pressable style={{
          backgroundColor: '#f22', width:30, height: '50%',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 4,
          elevation: 3,
        }} >
          <Text style={styles.text}>Banned</Text>
        </Pressable> 
        </DataTable.Cell>
        </DataTable.Row>


        <DataTable.Row >
      <DataTable.Cell style={{ borderLeftColor: 'lightgray', borderLeftWidth: 1, alignItems: 'center', justifyContent: 'center' }}>

 
        </DataTable.Cell>
        <DataTable.Cell style={{ borderLeftColor: 'lightgray', borderLeftWidth: 1, alignItems: 'center', justifyContent: 'center', }}>
          <Text
            style={{ alignItems: 'center', fontSize: 10, justifyContent: 'center', }}>
            charlie
          </Text>
        </DataTable.Cell>
        <DataTable.Cell style={{ borderLeftColor: 'lightgray', borderLeftWidth: 1, alignItems: 'center', justifyContent: 'center', }}>
          <Text
            style={{ alignItems: 'center', fontSize: 10, justifyContent: 'center', }}>
            charlie
          </Text>
        </DataTable.Cell>
        <DataTable.Cell style={{ borderLeftColor: 'lightgray', borderLeftWidth: 1, alignItems: 'center', justifyContent: 'center', }}>
          <Text
            style={{ alignItems: 'center', fontSize: 10, justifyContent: 'center', }}>
            charlie
          </Text>
        </DataTable.Cell>
        <DataTable.Cell style={{ borderLeftColor: 'lightgray', borderLeftWidth: 1, alignItems: 'center', justifyContent: 'center', }}>
          <Text
            style={{ alignItems: 'center', fontSize: 10, justifyContent: 'center', }}>
            _
          </Text>
        </DataTable.Cell>

        <DataTable.Cell style={{ borderLeftColor: 'lightgray', borderLeftWidth: 1, alignItems: 'center', justifyContent: 'center', }}>
        <DownloadPicker/>

        </DataTable.Cell>
        <DataTable.Cell style={{ borderLeftColor: 'lightgray', borderLeftWidth: 1, alignItems: 'center', justifyContent: 'center', }}>
        <Pressable style={{
          backgroundColor: '#222', width:30, height: '50%',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 4,
          elevation: 3,
        }} >
          <Text style={styles.text}>Deleted</Text>
        </Pressable> 
        </DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{ backgroundColor: '#F5F5F5'}}>
      <DataTable.Cell style={{borderLeftColor: 'lightgray', borderLeftWidth: 1,  alignItems: 'center', justifyContent: 'center' }}>

   
        </DataTable.Cell>
        <DataTable.Cell style={{ borderLeftColor: 'lightgray', borderLeftWidth: 1, alignItems: 'center', justifyContent: 'center', }}>
          <Text
            style={{ alignItems: 'center', fontSize: 10, justifyContent: 'center', }}>
            charlie
          </Text>
        </DataTable.Cell>
        <DataTable.Cell style={{ borderLeftColor: 'lightgray', borderLeftWidth: 1, alignItems: 'center', justifyContent: 'center', }}>
          <Text
            style={{ alignItems: 'center', fontSize: 10, justifyContent: 'center', }}>
            charlie
          </Text>
        </DataTable.Cell>
        <DataTable.Cell style={{ borderLeftColor: 'lightgray', borderLeftWidth: 1, alignItems: 'center', justifyContent: 'center', }}>
          <Text
            style={{ alignItems: 'center', fontSize: 10, justifyContent: 'center', }}>
            charlie
          </Text>
        </DataTable.Cell>
        <DataTable.Cell style={{ borderLeftColor: 'lightgray', borderLeftWidth: 1, alignItems: 'center', justifyContent: 'center', }}>
          <Text
            style={{ alignItems: 'center', fontSize: 10, justifyContent: 'center', }}>
            _
          </Text>
        </DataTable.Cell>

        <DataTable.Cell style={{ borderLeftColor: 'lightgray', borderLeftWidth: 1, alignItems: 'center', justifyContent: 'center', }}>
   <DownloadPicker/>
        </DataTable.Cell>
        <DataTable.Cell style={{ borderLeftColor: 'lightgray', borderLeftWidth: 1, alignItems: 'center', justifyContent: 'center', }}>
        <Pressable style={{
          backgroundColor: '#07f', width:30, height: '50%',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 4,
          elevation: 3,
        }} >
          <Text style={styles.text}>All</Text>
        </Pressable> 
        </DataTable.Cell>
        </DataTable.Row>

 

<DataTable.Pagination
  page={page}
  numberOfPages={3}
  onPageChange={(page) => setPage(page)}
  label="1-2 of 6"
  optionsPerPage={optionsPerPage}
  itemsPerPage={itemsPerPage}
  setItemsPerPage={setItemsPerPage}
  showFastPagination
  optionsLabel={'Rows per page'}
/>
</DataTable>

    </ScrollView>


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
  tableHeading:{
    fontWeight:'bold',
    color:'black',
},
header:{
    marginLeft:0,
    borderLeftColor:'lightgray',
    borderLeftWidth:1},
    header1:{
      marginLeft:0,

    },
  view: {
		// This style is getting overridden by "overflow-y: auto; overflow-x: hidden"
		overflow: 'scroll'
	},
  picker: {
    width: 20,
    alignItems: 'center',
    justifyContent: 'center',
  
  },
  container: {
    width: '100%',
    height: '15%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: "row",
    paddingLeft: 5,
    paddingRight: 5
  },



  text: {
    fontSize: 5,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',

  },
});