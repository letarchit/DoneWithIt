import React from "react";
import { Text, Button } from "react-native"
import Screen from './app/components/Screen'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";


export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}
