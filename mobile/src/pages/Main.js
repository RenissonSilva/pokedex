import React from 'react';
import { View, Text, TextInput, TouchableOpacity,ImageBackground, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import api from '../services/api';
function Main({ navigation }){

componentDidMount(); {
  this.loadPokemons();
}

loadPokemons = async () => {
  const reponse = await api.get('/api/v2/');

  const { docs } = reponse.data;

  console.log(docs);
};
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
      <TouchableOpacity onPress={() => navigation.navigate('Detail',{ pokeID: 1 })} style={[styles.cardPokemon , { backgroundColor:'#60CD8B', }]}>{/* Variavel no background de acordo com o tipo principal */}
        <Text style={styles.titleCard}>Bulbasaur   #001</Text>{/* Variavel que pega nome e id do pokemon */}
        <View style={styles.typeCards}>{/* Na hora que for listar lembrar de alterar ordem, pra o tipo principal aparecer primeiro */}
            <Text style={[styles.typeText , { color:'#046D0E',borderColor:'#046D0E', }]}>Grass</Text>
            <Text style={[styles.typeText , { color:'#794FD2',borderColor:'#794FD2', }]}>Poison</Text>{/* Colocar variavel pra colocar a cor de acordo com o tipo */}
        </View>
        <ImageBackground source={{ uri: "https://pokeres.bastionbot.org/images/pokemon/1.png" }} style={styles.image}>
        </ImageBackground>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Detail',{ pokeID: 2 })} style={[styles.cardPokemon , { backgroundColor:'#FFAFAC', }]}>
        <Text style={styles.titleCard}>Charmander   #004</Text>
        <View style={styles.typeCards}>
            <Text style={[styles.typeText , { color:'#FF4949',borderColor:'#FF4949', }]}>Fire</Text>
        </View>
        <ImageBackground source={{ uri: "https://pokeres.bastionbot.org/images/pokemon/4.png" }} style={styles.image}>
        </ImageBackground>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Detail',{ pokeID: 3 })} style={[styles.cardPokemon , { backgroundColor:'#FFAFAC', }]}>
        <Text style={styles.titleCard}>Charizard   #006</Text>
        <View style={styles.typeCards}>
            <Text style={[styles.typeText , { color:'#FF4949',borderColor:'#FF4949', }]}>Fire</Text>
            <Text style={[styles.typeText , { color:'#C8F5FF',borderColor:'#C8F5FF', }]}>Flying</Text>
        </View>
        <ImageBackground source={{ uri: "https://pokeres.bastionbot.org/images/pokemon/6.png" }} style={styles.image}>
        </ImageBackground>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Detail',{ pokeID: 4 })} style={[styles.cardPokemon , { backgroundColor:'#96CDFF', }]}>
        <Text style={styles.titleCard}>Squirtle   #007</Text>
        <View style={styles.typeCards}>
            <Text style={[styles.typeText , { color:'#377EE8',borderColor:'#377EE8', }]}>Water</Text>
        </View>
        <ImageBackground source={{ uri: "https://pokeres.bastionbot.org/images/pokemon/7.png" }} style={styles.image}>
        </ImageBackground>
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
    image: {
      flex: 1,
      opacity:0.4,
      width:120,
      marginLeft:20,
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
      top:100,
      height:85,
      marginBottom:15,
      borderRadius:15,
      marginHorizontal:20,
    },

    titleCard:{
      color:'#FFF',
      fontSize:17,
      position:'absolute',
      right:20,
      top:5,
      fontFamily: "monospace",
      fontWeight:'bold',
    },

    typeText:{
      fontSize:15,
      fontFamily: "monospace",
      fontWeight:'bold',
      borderRadius:15,
      paddingHorizontal:25,
      paddingVertical:2,
      marginLeft:5,
      borderWidth:1,
    },
    typeCards:{
      flexDirection:'row',
      position:'absolute',
      right:10,
      bottom:10,
    }
  })

export default Main; 