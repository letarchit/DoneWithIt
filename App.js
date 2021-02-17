import React, {useState} from "react";
import { TextInput, View, Text, Switch } from "react-native";
import MessagesScreen from "./app/screens/MessagesScreen";
import Icon from "./app/components/Icon"
import ListItem from "./app/components/ListItem"
import ViewImageScreen from "./app/screens/ViewImageScreen";
import Screen from './app/components/Screen'
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";


export default function App() { 
  return( <ListingEditScreen /> 
  )
}

{/* <ListItem title="My Title" ImageComponent={<Icon name="email"/>}/> */}


{/* <Icon 
    name="email"
    size={50}
    backgroundColor = "red"
    iconColor="white"
   /> */}