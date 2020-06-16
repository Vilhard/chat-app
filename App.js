import * as React from "react";
import Login from "./src/screens/Login";
import Chat from "./src/components/Chat";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import createUser from "./src/screens/createUser";

// Create the navigator
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="chat"
          component={Chat}
          options={{
            title: "Chat",
            headerStyle: {
              backgroundColor: "#fafafa",
            },
            headerTintColor: "#64b4cc",
            headerTitleStyle: {},
          }}
        />
        <Stack.Screen
          name="createUser"
          component={createUser}
          options={{
            title: "Create User",
            headerStyle: {
              backgroundColor: "#fafafa",
            },
            headerTintColor: "#64b4cc",
            headerTitleStyle: {},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
