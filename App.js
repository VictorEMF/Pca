import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Inicio from './src/Telas/TL_inicio';
import Principal from './src/Telas/TL_principal';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{ headerShown: false}}>
        <Stack.Screen name='Inicio' component={Inicio} />
        <Stack.Screen name='Principal' component={Principal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

