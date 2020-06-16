import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { GiftedChat, Bubble, Send } from "react-native-gifted-chat";
import { IconButton } from "react-native-paper";
import firebase from "../config/Firebase";

export default function Chat() {
  const [user, setUser] = useState(firebase.auth().currentUser.uid);
  const [email, setEmail] = useState(firebase.auth().currentUser.email);
  const [name, setName] = useState(firebase.auth().currentUser.displayName);
  const [messages, setMessages] = useState([
    /**
     * Mock message data
     */
    // example of system message
    {
      _id: 0,
      text: "Opened conversation with " + name,
      createdAt: new Date().getTime(),
      system: true,
    },
    // example of chat message
    {
      _id: 1,
      text: "Hello!",
      createdAt: new Date().getTime(),
      user: {
        _id: 2,
        name: "Test User",
      },
    },
    {
      _id: 2,
      text: "Is it me you're looking for?",
      createdAt: new Date().getTime(),
      user: {
        _id: 2,
        name: "Test User",
      },
    },
  ]);

  // WIP to get messages fetched from firebase...
  /*useEffect(async () => {
    firebase
      .database()
      .ref("messages")
      .on("value", (snapshot) => {
        const messages = snapshot.val();
        console.log(messages);
      });
  }); */

  function renderSend(props) {
    return (
      <Send {...props}>
        <View style={styles.sendingContainer}>
          <IconButton icon="send-circle" size={25} color="#7b7a7e" />
        </View>
      </Send>
    );
  }

  function renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: "#356afb",
            borderRadius: 16,
            borderBottomRightRadius: 16,
            marginBottom: 10,
            justifyContent: "flex-end",
          },
          left: {
            backgroundColor: "#ffffff",
            borderRadius: 16,
            marginBottom: 10,
            borderTopLeftRadius: 20,
            justifyContent: "flex-end",
          },
        }}
        textStyle={{
          right: {
            color: "#ffffff",
          },
        }}
      />
    );
  }

  // Sends messages to firebase || commented off because fetch is not working
  /*async function sendMessage(messages) {
    const text = messages[0].text;
    try {
      firebase
        .database()
        .ref("messages")
        .push({
          text,
          createdAt: new Date().getTime(),
          user: {
            _id: user,
            email: email,
            name: name,
          },
        });
    } catch (error) {
      Alert.alert("Error:", error.message);
    }
  } */

  function handleSend(newMessage = []) {
    setMessages(GiftedChat.append(messages, newMessage));
  }

  return (
    <View style={{ flex: 1 }}>
      <GiftedChat
        messages={messages}
        onSend={handleSend}
        user={{ _id: 1 }}
        renderBubble={renderBubble}
        placeholder="Type your message..."
        alwaysShowSend
        renderSend={renderSend}
      />
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  sendingContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  bottomComponentContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
