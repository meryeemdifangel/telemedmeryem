import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TouchableRipple } from "react-native-paper";
import Header from "./Header";
import { deviceHeight, deviceWidth } from "./CommonStyles";

const PlanAndScheduleScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
    <Header back title={"Plan & Schedule it"} rightComponent  />

    {/* cards row */}
    <View style={styles.row}>
        <Card
          title="Scheduler"                      
              Icon={() => (
                <Image
                  style={styles.iconImages}
                  source={require("../../assets/icons/scheduler.png")}
                />
              )}
          onPress={() => navigation.navigate("Scheduler")}
        />
        <Card
          title="Calendar"
              Icon={() => (
                <Image
                  style={styles.iconImages}
                />
              )}
          onPress={() => navigation.navigate("Calendar")}
        />
         </View>

<View   style={{flexDirection:'row' ,width:deviceWidth*0.95 , alignItems:'center' ,justifyContent:'space-between' ,  marginBottom:5  }}>


        <Card
          title="Agenda"
              Icon={() => (
                <Image
                  style={styles.iconImages}
                  source={require("../../assets/icons/agenda.png")}
                />
              )}
          onPress={() => navigation.navigate("Agenda")}
        />
        <Card
          title="Timeline"
              Icon={() => (
                <Image
                  style={styles.iconImages}
                  source={require("../../assets/icons/timeline.png")}
                />
              )}
          onPress={() => navigation.navigate("Timeline")}
        />
         </View>

<View   style={{flexDirection:'row' ,width:deviceWidth*0.95 , alignItems:'center' ,justifyContent:'space-between' ,  marginBottom:5  }}>


        <Card
          title="Appointments"
              Icon={() => (
                <Image
                  style={styles.iconImages}
                  source={require("../../assets/icons/timeline.png")}
                />
              )}
          onPress={() => navigation.navigate("Appointments")}
        />

        <Card
          title="Shifts"
              Icon={() => (
                <Image
                  style={styles.iconImages}
                  source={require("../../assets/icons/shift.png")}
                />
              )}
          onPress={() => navigation.navigate("Shifts")}
        />
         </View>

<View   style={{flexDirection:'row' ,width:deviceWidth*0.95 , alignItems:'center' ,justifyContent:'space-between' ,  marginBottom:5  }}>


        <Card
          title="Skills"
              Icon={() => (
                <Image
                  style={styles.iconImages}
                  source={require("../../assets/icons/skills.png")}
                />
              )}
          onPress={() => navigation.navigate("Skills")}
        />
        <Card
          title="Leaves"
              Icon={() => (
                <Image
                  style={styles.iconImages}
                  source={require("../../assets/icons/leave.png")}
                />
              )}
          onPress={() => navigation.navigate("Leaves")}
        />
         </View>

<View   style={{flexDirection:'row' ,width:deviceWidth*0.95 , alignItems:'center' ,justifyContent:'space-between' ,  marginBottom:5  }}>


        <Card
          title="Requests for Appointment"
              Icon={() => (
                <Image
                  style={styles.iconImages}
                  source={require("../../assets/icons/timeline.png")}
                />
              )}
          onPress={() => navigation.navigate("Leaves")}
        />
		        

      </View>
      {/* cards row end */}
      </View>
  );
};

export default PlanAndScheduleScreen;

const Card = ({ title, icon, imageUri,onPress }) => {
  return (
    <View style={styles.card}>
      <TouchableRipple onPress={onPress}>
        <View
          style={{
            alignItems: "center",
            width: "100%",
            height: "100%",
            padding: 10,
            justifyContent: "space-evenly",
          }}
        >
      {icon&&
          <MaterialCommunityIcons name={icon} size={40} color="darkblue" />
      }
          {imageUri&&
          <Image
                style={styles.iconImages}
                source={require("../../assets/icons/scheduler.png")}
              />
          }
          <Text>{title}</Text>
        </View>
      </TouchableRipple>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: "#00B7DD",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
    marginVertical: 10,
  },
  card: {
    backgroundColor: "lightblue",
    height: deviceHeight * 0.2,
    width: deviceWidth * 0.3,
    marginRight: 5,
    borderBottomEndRadius: 5,
    borderTopStartRadius: 5,
  },
  iconImages:{
    height:100,
    width:100,
    backgroundColor:'red',
  }
});
