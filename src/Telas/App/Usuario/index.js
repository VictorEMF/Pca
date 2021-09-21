import { StatusBar } from 'expo-status-bar';
import React, { useState,useEffect } from 'react';
import {StyleSheet, Text, View, Alert } from 'react-native';

export default function Usuario() {  
  return (
    <View style={styles.container} >
      <Text>Nome do Usuario</Text>
      <Text>Idade do Usuario</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c4c4c4',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
