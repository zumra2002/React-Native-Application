import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

// Screens
import Account from "@/pages/Account";
import Category from "@/pages/Category";
import Chat from "@/pages/Chat";
import Home from "@/pages/Home";
import Postadd from "@/pages/Postadd";

export type RootStackParamList = {
  Home: undefined;
  Category: undefined;
  Chat: undefined;
  Account: undefined;
  Postadd: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Index() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Category"
        component={Category}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Account"
        component={Account}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Postadd"
        component={Postadd}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
