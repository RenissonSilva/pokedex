import React from 'react';
import { View, Text } from 'react-native';

function Detail({ navigation }){
  return(
    <>
    <Text>
      ID: {JSON.stringify(navigation.getParam('pokeID'))}
    </Text>
    </>
  )

}

export default Detail; 