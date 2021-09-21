import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Inicio( {navigation} ) {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text>Tela inicial de exercicios</Text>
        <Button onPress={()=> navigation.navigate('Aerobico')} title='Exercicios aerobicos'/>
        <Button onPress={()=> navigation.navigate('Alimentos')} title='Alimentos'/>
        <Button onPress={()=> navigation.navigate('Funcional')} title='Exercicios Funcionais'/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c4c4c4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  safe:{
    flex:1,
  }
})