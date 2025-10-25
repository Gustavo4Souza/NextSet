import React from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Inicio from "../paginas/Inicio";
import Login from "../paginas/Login";
import Registro from "../paginas/Registro";
import Treinos from "../paginas/Treinos";

const Stack = createNativeStackNavigator();

export default function navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registro" component={Registro} />
        <Stack.Screen name="Treinos" component={Treinos} />        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
