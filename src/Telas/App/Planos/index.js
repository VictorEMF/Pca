import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Inicio from '../../TL_exercios/TLI_inicial';
import Aerobico from '../../TL_exercios/TLI_aerobico';
import Funcional from '../../TL_exercios/TLI_funcional';
import Alimentos from '../../TL_aliementos';
const Stack = createStackNavigator();

export default function Planos( navigation ) {
  return (
    <NavigationContainer creenOptions={{ headerShown: false}} independent={true} >
      <Stack.Navigator screenOptions={{ headerShown: false}} initialRouteName={Inicio} >
        <Stack.Screen name='Inicio' component={Inicio} />
        <Stack.Screen name='Aerobico' component={Aerobico} />
        <Stack.Screen name='Funcional' component={Funcional} />
        <Stack.Screen name='Alimentos' component={Alimentos}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

