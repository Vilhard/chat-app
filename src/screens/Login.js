import React, { useState, useContext } from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  Alert,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import firebase from "../config/Firebase";
import { Styles } from "../Styles/Styles";
import { TextInput } from "react-native-paper";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const onLoginPress = async () => {
    try {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => navigation.navigate("chat"))
        .catch((error) => {
          setError(Alert.alert("Oops! Something went wrong :(", error.message));
        });
    } catch (err) {
      Alert.alert("Error:", error.message);
    }
  };

  return (
    <View style={Styles.container}>
      <Text style={Styles.titleText}>Email</Text>
      <TextInput
        style={Styles.input}
        onChangeText={(email) => setEmail(email)}
        value={email}
        underlineColor="#e7e7e7"
        theme={{ colors: { text: "#4c5252", primary: "#e7e7e7" } }}
        placeholder="Email goes here!"
      />
      <Text style={Styles.titleText}>Password</Text>
      <TextInput
        style={Styles.input}
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
        value={password}
        underlineColor="#e7e7e7"
        theme={{ colors: { text: "#4c5252", primary: "#e7e7e7" } }}
        placeholder="Password goes here!"
      />
      <TouchableOpacity
        style={Styles.buttons}
        title="Login"
        onPress={() => onLoginPress()}
      >
        <Text style={Styles.textStyle}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={Styles.buttons}
        onPress={() => navigation.navigate("createUser")}
      >
        <Text style={Styles.textStyle}>Create User</Text>
      </TouchableOpacity>
    </View>
  );
}
