import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet,View,ScrollView,} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Prancha from '../../../componentes/exaerobico/prancha';
import Abdominal from '../../../componentes/exaerobico/abdominal';


export default function Planos( navigation ) {

  const [modalVisivel, setModalVisivel] = useState(false);

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <ScrollView>
          <Prancha />
          <Abdominal />
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