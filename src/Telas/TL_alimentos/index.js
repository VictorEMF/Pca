import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, View, Image, Dimensions } from 'react-native';

export default function Alimentos( navigation ) {

  const {width} = Dimensions.get('window');
  const height = width * 0.6;

  const imganges =[
    require('../../img/net.jpeg'),
    require('../../img/tv.jpeg')
  ]

  return (
    <SafeAreaView style={styles.container}>
      <View style={{marginTop:50, width, height}}>
        <ScrollView pagingEnabled 
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{width, height}}>

          {
            imganges.map((imagem, index) => (<Image key={index} 
              source={imagem} style={{width, height, borderRadius:20,resizeMode:'contain'}}/>
            ))
          }
        </ScrollView>
        <View style={{flexDirection:'row', position:'absolute', bottom:0, alignSelf:'center' }}>
          <Text  style={styles.pagingText}>◉</Text>
        </View>
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
  
  
})