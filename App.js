import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Inicio from "./src/paginas/Inicio";
import Login from "./src/paginas/Login";
import Registro from "./src/paginas/Registro";
import Treinos from './src/paginas/Treinos';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Inicio" component={Inicio} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Registro" component={Registro} />
          <Stack.Screen name="Treinos" component={Treinos} />    
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
