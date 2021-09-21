import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View,ScrollView, Image, Modal, Button, TouchableHighlight} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Planos( navigation ) {

  const [modalVisivel, setModalVisivel] = useState(false);

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.text}> 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <View style={styles.centeredView}>
            <Modal 
              animationType='slide' 
              transparent={true} 
              visible={modalVisivel} 
              onRequestClose={() => {setModalVisivel(!modalVisivel)}}
              >
                <View style={styles.modalView}>
                  <Image source={require('../../../gifs/ex1.gif')} />
                  <Button title='Fechar' onPress={() => setModalVisivel(!modalVisivel)}/>
                </View>
            </Modal>           
          </View>
          <Button title='Abrir' onPress={() => setModalVisivel(true)} />
          <TouchableHighlight onPress={() => setModalVisivel(true)}>
            <Image source={require('../../../gifs/ex1.gif')}/>
          </TouchableHighlight>
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
  text:{
    fontSize:42,
    textAlign:'center'
  },
  video: {
    alignSelf: 'center',
    width: 320,
    height: 200,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
})