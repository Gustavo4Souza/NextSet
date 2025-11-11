import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Inicio from '../paginas/Inicio';
import Login from '../paginas/Login';
import Registro from "../paginas/Registro";
import Treinos from '../paginas/CriarTreino';
import Relatorio from '../paginas/Relatorio';
import Config from '../paginas/Config';
import Treino from '../paginas/Treino';
import Calendario from '../paginas/Calendario';
import Home from '../paginas/Home';
import ListaDeExercicios from '../paginas/ListaDeExercicios';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();
const TreinosStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const CalendarioStack = createNativeStackNavigator();
const PerfilStack = createNativeStackNavigator();

// Stack Navigator para a aba de Treinos
function TreinosStackScreen() {
  return (
    <TreinosStack.Navigator screenOptions={{ headerShown: false }}>
      <TreinosStack.Screen name="TreinosMain" component={Treinos} />
      <TreinosStack.Screen name="Treino" component={Treino} />
      <TreinosStack.Screen name="ListaDeExercicios" component={ListaDeExercicios} />
    </TreinosStack.Navigator>
  );
}

// Stack Navigator para a aba Home
function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeMain" component={Home} />
      <HomeStack.Screen name="Treino" component={Treino} />
    </HomeStack.Navigator>
  );
}

// Stack Navigator para a aba Calendário
function CalendarioStackScreen() {
  return (
    <CalendarioStack.Navigator screenOptions={{ headerShown: false }}>
      <CalendarioStack.Screen name="CalendarioMain" component={Calendario} />
      <CalendarioStack.Screen name="Treino" component={Treino} />
    </CalendarioStack.Navigator>
  );
}

// Stack Navigator para a aba Perfil
function PerfilStackScreen() {
  return (
    <PerfilStack.Navigator screenOptions={{ headerShown: false }}>
      <PerfilStack.Screen name="PerfilMain" component={Config} />
      <PerfilStack.Screen name="Relatorio" component={Relatorio} />
    </PerfilStack.Navigator>
  );
}

export default function Navigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Inicio" component={Inicio} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Registro" component={Registro} />
      <Stack.Screen name="MainTabs" component={MainTabs} />
      <Stack.Screen name="Relatorio" component={Relatorio} />
    </Stack.Navigator>
  );
}

function MainTabs() {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        tabBarIconStyle: styles.tabBarIcon,
        tabBarActiveTintColor: '#8534FE',
        tabBarInactiveTintColor: '#fff',
      }}
    >
      <Tabs.Screen
        name="ModeloDeTreino"
        component={TreinosStackScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="barbell-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Calendario"
        component={CalendarioStackScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Perfil"
        component={PerfilStackScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />

    </Tabs.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#000',
    borderTopWidth: 1,
    borderTopColor: '#8534FE',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tabBarIcon: {
    marginTop: 10,
    marginBottom: 0,
    flex: 1,
  },
});

