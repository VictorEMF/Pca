import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import Rotas from '../../rotas'

export default function Princiapal(){
  return(
    <NavigationContainer independent={true}>
      <Rotas />
    </NavigationContainer>
  )
}
