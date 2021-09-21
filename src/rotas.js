import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Planos from './Telas/App/Planos';
import Historico from './Telas/App/Historico';
import Usuario from './Telas/App/Usuario';
import { color } from 'react-native-reanimated';
import { Entypo, AntDesign,FontAwesome } from '@expo/vector-icons';



const Tab = createBottomTabNavigator();

export default function Rotas(){
    return(
        <Tab.Navigator screenOptions={{ 
            tabBarStyle:{backgroundColor: 'black', paddingBottom:4, paddingTop:4}, 
            tabBarActiveTintColor:'#76d1e3', 
            tabBarInactiveTintColor:'#c4c4c4' ,
            headerShown:false }} >

            <Tab.Screen name="Planos" component={Planos} options={{ 
                tabBarIcon:({size, color}) => (
                <Entypo name='home' size={size} color={color} />) 
                }} />


            <Tab.Screen name="Historico" component={Historico} options={{ 
                tabBarIcon:({size, color}) => (
                <AntDesign name="calendar" size={24} color={color} />) 
                }} />


            <Tab.Screen name="Eu" component={Usuario} options={{ 
                tabBarIcon:({size, color}) => (
                <FontAwesome name='user-o' size={size} color={color} />) 
                }} />

                
        </Tab.Navigator>
    )
}
