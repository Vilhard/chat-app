import React, { useState } from "react";
import { Button, View, Text, StyleSheet, Alert } from "react-native";
import firebase from "../config/Firebase";
import { Styles } from "../Styles/Styles";
import { TextInput } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function createUser({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onCreatePress = async () => {
    try {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(
          () => {
            var userf = firebase.auth().currentUser;

            userf.updateProfile({ displayName: name }).then(
              () => {
                alert("User " + name + " was created successfully.");
                navigation.goBack();
              },
              function (error) {
                console.warn("Error updating username");
              }
            );
          },
          function (error) {
            console.error("got error:" + error.message);
            alert("User creation failed.");
          }
        );
    } catch ({ message }) {
      console.log("create account failed. catch error:" + message);
    }
  };

  return (
    <View style={Styles.container}>
      <Text style={Styles.titleTextCreate}>Email</Text>
      <TextInput
        style={Styles.input}
        onChangeText={(email) => setEmail(email)}
        value={email}
        underlineColor="#e7e7e7"
        theme={{ colors: { text: "#4c5252", primary: "#e7e7e7" } }}
      />
      <Text style={Styles.titleTextCreate}>Password</Text>
      <TextInput
        style={Styles.input}
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
        value={password}
        underlineColor="#e7e7e7"
        theme={{ colors: { text: "#4c5252", primary: "#e7e7e7" } }}
      />
      <Text style={Styles.titleTextCreate}>Name</Text>
      <TextInput
        style={Styles.input}
        onChangeText={(name) => setName(name)}
        value={name}
        underlineColor="#e7e7e7"
        theme={{ colors: { text: "#4c5252", primary: "#e7e7e7" } }}
      />
      <TouchableOpacity style={Styles.buttons} onPress={() => onCreatePress()}>
        <Text style={Styles.textStyle}>Create</Text>
      </TouchableOpacity>
    </View>
  );
}
