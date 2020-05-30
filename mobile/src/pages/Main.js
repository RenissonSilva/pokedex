import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

function Main(){
  return (
    <>
      <View style={styles.searchForm}>
        <TextInput style={styles.searchInput}
          placeholder="Pesquise por nome"
          placeholderTextColor="#FFF"
          autoCapitalize="words"
          autoCorrect={false}
          />
          
      </View>
      <TouchableOpacity style={styles.cardPokemon}>
        <Text style={styles.titleCard}>Bulbasaur   #001</Text>
      </TouchableOpacity>
    </>
  )}

  const styles = StyleSheet.create({
    searchForm:{
      position:'absolute',
      top:20,
      left:40,
      right:40,
      flexDirection:'row',
    },
  
    searchInput:{
      flex:1,
      height:50,
      backgroundColor:'#FFAFAC',
      color:'#FFF',
      borderRadius:25,
      paddingHorizontal:20,
      fontSize:16,
      fontFamily: "monospace",
      shadowColor:'#000',
      shadowOpacity:0.2,
      shadowOffset:{
        width:4,
        height:4,
      },
      elevation:2,
    },

    cardPokemon:{
      position:'absolute',
      top:100,
      right:20,
      left:20,
      height:80,
      backgroundColor:'#60CD8B',
      borderRadius:15,
    },
    titleCard:{
      color:'#FFF',
      fontSize:17,
      position:'absolute',
      right:20,
      top:5,
      fontFamily: "monospace",
    }
  })

export default Main; 