import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import Martelo from '../../../componentes/exfuncional/martelo';
import Elevacao from '../../../componentes/exfuncional/elevacao';

export default function Funcional( navigation ) {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <ScrollView>
          <Martelo />
          <Elevacao />
        </ScrollView>
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
  },
})