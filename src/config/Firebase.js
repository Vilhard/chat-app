import * as firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmYkxG1RyYkzJa9bnhwCiJ-Xle9BZ6Wok",
  authDomain: "chat-app-5ee0f.firebaseapp.com",
  databaseURL: "https://chat-app-5ee0f.firebaseio.com",
  projectId: "chat-app-5ee0f",
  storageBucket: "chat-app-5ee0f.appspot.com",
  messagingSenderId: "392980619500",
  appId: "1:392980619500:web:79b494014c13f59a5f85c9",
  measurementId: "G-Z3LW02K0D1",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
