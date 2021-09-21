import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



export default function Inicio({navigation}) {
  return (
    <View style={styles.container}>
      <Text> Vai para o Home</Text>  
      <TouchableOpacity style={styles.btnContainer} onPress={ () => navigation.navigate('Principal') }>
        <Text style={styles.textBtn}>Aperte</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: 'white',
    padding: 70,
    fontSize: 20,
  },

  btnContainer:{
      elevation: 8,
      backgroundColor: "#009688",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12,
  },

  textBtn: {
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    }
});
