import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Inicio from '../paginas/Inicio';
import Login from '../paginas/Login';
import Registro from "../paginas/Registro";
import Treinos from '../paginas/Treinos';
import Relatorio from '../paginas/Relatorio';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Inicio" component={Inicio} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Registro" component={Registro} />
      <Stack.Screen name="Treinos" component={Treinos} />    
      <Stack.Screen name="Relatorio" component={Relatorio} />  
    </Stack.Navigator>
  );
}