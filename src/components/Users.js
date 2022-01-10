import { useIsFocused, useNavigation } from "c@react-navigation/core";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { IconButton, Searchbar } from "react-native-paper";
import { deleteUser, getUsers } from "../../api/users";
import ActivityIndicator from "./ActivityIndicator";
import Table from "./Table";
import Header from "./Header";

const Users = () => {
  const focus = useIsFocused();
  const [search, setSearch] = useState("");
  const [searchedUsers, setSearchedUsers] = useState([]);
  const [users, setUsers] = useState();
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [checkedUsers, setCheckedUsers] = useState([]);

  const callForUsers = async () => {
    setCheckedUsers([]);
    setUsers([]);
    setLoading(true);
    const { ok, data } = await getUsers();
    if (ok) {
      setAllUsers(data);
      const filterUsers = data.map((user) => {
        return {
          id: user._id,
          Avatar: user.imageSrc,
          Username: user.username,
          "Birth Date": dayjs(user.dateBirth).format("DD-MM-YYYY"),
          Email: user.email,
          Gender: user.gender,
          "First Name": user.contactName.first,
          Initials: user.contactName.initials,
          "Last Name": user.contactName.last,
          Address1: user.Address.address1,
          Address2: user.Address.address2,
          Address3: user.Address.address3,
          "Zip Code": user.Address.zip,
          City: user.Address.city,
          State: user.Address.state,
          Country: user.Address.country,
          Phone: user.phones.phone,
          Mobile: user.phones.mobile,
          Skype: user.phones.skype,
          Mode: user.mood,
          About: user.about,
        };
      });
      setUsers(filterUsers);
      setLoading(false);
    }
  };

  useEffect(() => {
    callForUsers();
  }, [focus]);

  const onChangeSearch = () => {
    const filtered = users.filter(
      (el) =>
        `${el.Username}`.toLowerCase().startsWith(search.toLowerCase()) ||
        `${el.Email}`.toLowerCase().startsWith(search.toLowerCase())
    );
    setSearchedUsers(filtered);
  };

  return (
    <View style={{ flex: 1 }}>
      <ActivityIndicator visible={loading} />
      <Header back title={"Users"} />
      <IconBar
        checkedUsers={checkedUsers}
        users={allUsers}
        callForUsers={callForUsers}
      />
      <Searchbar
        style={styles.search}
        underlineColorAndroid="white"
        placeholder="Search"
        clearButtonMode="while-editing"
        value={search}
        onChangeText={(search) => {
          if (search.length < 1) {
            setSearchedUsers();
          } else {
            setSearch(search);
            onChangeSearch();
          }
        }}
      />
      {users && users.length > 0 && (
        <Table
          tableData={
            searchedUsers && searchedUsers.length > 0 ? searchedUsers : users
          }
          showCheckbox
          checked={checkedUsers}
          setChecked={setCheckedUsers}
        />
      )}
    </View>
  );
};

const IconBar = ({ checkedUsers, users, callForUsers }) => {
  const { navigate } = useNavigation();
  return (
    <View style={{ height: 60, justifyContent: "center" }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <IconButton
          icon="plus"
          style={{ marginLeft: 8, backgroundColor: "#07f" }}
          color="white"
          onPress={() => {
            navigate("OperationsUser");
          }}
        />
        <IconButton
          icon="pencil"
          style={{ marginLeft: 8, backgroundColor: "yellow" }}
          color="black"
          onPress={async () => {
            if (checkedUsers.length < 1) {
              navigate("OperationsUser");
            }

            const data = users.filter((user) => user._id == checkedUsers[0])[0];

            const cleanUser = {
              _id: data._id,
              prefix: data.prefix,
              username: data.username,
              profile: data.profile,
              email: data.email,
              dateBirth: data.dateBirth,
              gender: data.gender,
              firstName: data.contactName.first,
              initials: data.contactName.initials,
              lastName: data.contactName.last,
              imageSrc: data.imageSrc,
              address1: data.Address.address1,
              address2: data.Address.address2,
              address3: data.Address.address3,
              city: data.Address.city,
              zip: data.Address.zip,
              state: data.Address.state,
              country: data.Address.country,			  
            };
            navigate("OperationsUser", { selectedUser: cleanUser });
          }}
        />
        <IconButton
          icon="delete"
          style={{ marginLeft: 8, backgroundColor: "black" }}
          color="white"
          onPress={() => {
            if (checkedUsers.length < 1) return null;
            checkedUsers.forEach(async (userId) => {
              const { ok } = await deleteUser(userId);
              if (ok) {
                console.log("deleted");
                callForUsers();
              }
            });
          }}
        />
        <IconButton
          icon="file-delimited"
          style={{ marginLeft: 8, backgroundColor: "lime" }}
          color="white"
        />
        <IconButton
          icon="file-pdf-box"
          style={{ marginLeft: 8, backgroundColor: "red" }}
          color="white"
        />
        <IconButton
          icon="microsoft-excel"
          style={{ marginLeft: 8, backgroundColor: "green" }}
          color="white"
        />
        <IconButton
          icon="printer"
          style={{ marginLeft: 8, backgroundColor: "brown" }}
          color="white"
        />
        <IconButton
          icon="cloud-upload"
          style={{ marginLeft: 8, backgroundColor: "cyan" }}
          color="black"
        />
        <IconButton
          icon="cloud-download"
          style={{ marginLeft: 8, backgroundColor: "7AB356" }}
          color="black"
        />
        <IconButton
          icon="archive"
          style={{ marginLeft: 8, backgroundColor: "gray" }}
          color="white"
        />

        <IconButton
          icon="lock"
          style={{ marginLeft: 8, backgroundColor: "red" }}
          color="white"
        />
        <IconButton
          icon="lock-open"
          style={{ marginLeft: 8, backgroundColor: "green" }}
          color="white"
        />
        <IconButton
          icon="hand-right"
          style={{ marginLeft: 8, backgroundColor: "red" }}
          color="white"
        />
        <IconButton
          icon="at"
          style={{ marginLeft: 8, backgroundColor: "orange" }}
          color="white"
        />
        <IconButton
          icon="chat"
          style={{ marginLeft: 8, backgroundColor: "#47fed3" }}
          color="white"
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingRight: 5,
    width: "100%",
  },
  search: {
    marginVertical: 10,
    marginHorizontal: 10,
    borderWidth: 0,
    shadowOpacity: 0,
    elevation: 0,
  },
});

export default Users;
