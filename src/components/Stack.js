import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { Component } from "react";

//testing only

import {

  OperationsAccountant,


} from "./meryem";


//import AppointmentProfile from "../screens/Planning/AppointmentProfile";









//Messenger
//import Forum from "../screens/Messenger/CallScreen";
//import Forum from "../screens/Messenger/CameraScreen";
//import Forum from "../screens/Messenger/ChatScreen";
//import Forum from "../screens/Messenger/GroupScreen";
//import Forum from "../screens/Messenger/MessagesScreen";
//import Forum from "../screens/Messenger/PeopleScreen";
//import Forum from "../screens/Messenger/SearchScreen";






//need to be added later
//import MateriaMedicaAyurveda from "../screens/Books/MateriaMedicaAyurveda";
//import MateriaMedicaHomeo from "../screens/Books/MateriaMedicaHomeo";
//import MateriaMedicaTCM from "../screens/Books/MateriaMedicaTCM";
//import Acupuncture from "../screens/Books/Acupuncture";
//import FormulasTCM from "../screens/Books/FormulasTCM";
//import PathologyTCM from "../screens/Books/PathologyTCM";



// OTHER NAVIGATION SCREENS
const Stack = createStackNavigator();

export class StackNavigation extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={""}>

    
          <Stack.Screen
            name="OperationsAccountant"
            component={OperationsAccountant}
            options={{ headerShown: false }}
          />
     
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
