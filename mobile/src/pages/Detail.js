import React from 'react';
import { View, Text } from 'react-native';
import api from '../services/api';

function Detail({ navigation }){
  
  componentDidMount(); {
    this.loadPokemons();
  }
  
  loadPokemons = async () => {
    const reponse = await api.get('/api/v2/');
  
    const { docs } = reponse.data;
  
    console.log(docs);
  };

  return(
    <>
    <Text>
      ID: {JSON.stringify(navigation.getParam('pokeID'))}
    </Text>
    </>
  )

}

export default Detail; 