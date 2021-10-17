import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View,ScrollView, Image, Modal, Button, TouchableHighlight} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Elevacao(){

    const [modalVisivel, setModalVisivel] = useState(false)

    return(
        <SafeAreaView style={styles.safe}>
            <View style={styles.container}>
                <Text style={styles.text}>Exercicio de Elevação é bom faça</Text>
                <View style={styles.centeredView}>
                    <Modal 
                    animationType='slide' 
                    transparent={true} 
                    visible={modalVisivel} 
                    onRequestClose={() => {setModalVisivel(!modalVisivel)}}>
                        <View style={styles.modalView}>
                            <Image source={require('../../gifs/elevacao.gif')}/>
                            <Button title='Fechar' onPress={() => setModalVisivel(!modalVisivel)}/>
                        </View>
                    </Modal>
                </View>
                <Button title='Abrir' onPress={() => setModalVisivel(true)} />
            </View>
        </SafeAreaView>
    )
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
      textAlign: 'left'
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