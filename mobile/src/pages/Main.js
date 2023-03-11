import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  ScrollView,
} from "react-native";
import api from "./api";
import { Card } from '../components/Card'

function Main({ navigation }) {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function getAllPokemons() {
      const response = await api.get('/pokemon?limit=10&offset=0')
      // const response = await api.get('/pokemon?limit=152&offset=0')
      const { results } = response.data;
      console.log(results)

      const payloadPokemons = await Promise.all(
        results.map(async pokemon => {
          const { id, types } = await getMoreInfo(pokemon.url);

          return {
            name: pokemon.name,
            id,
            types
          }
        })
      )
      setPokemons(payloadPokemons);
      // console.log('payloadPokemons', payloadPokemons)
    }

    getAllPokemons();
  }, [])

  async function getMoreInfo(url) {
      const response = await api.get(url)
      const { id, types } = response.data;

      return { id, types }
  }

  return (
    <>
      <View style={styles.boxForm}>
        <View style={styles.searchForm}>
          <TextInput
            style={styles.searchInput}
            placeholder="Pesquise por nome"
            placeholderTextColor="#FFF"
            autoCapitalize="words"
            autoCorrect={false}
          />
        </View>
      </View>
      <ScrollView style={styles.scrollPokemons}>
        {pokemons.map((item, key) => 
          <Card pokemon={item} key={key}/>
        )}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  boxForm: {
    backgroundColor: 'transparent',
    height: 100,
    margin: 0,
    padding: 0,
  },
  searchForm: {
    position: "absolute",
    top: 20,
    left: 30,
    right: 30,
  },
  scrollPokemons: {
    position: "relative",
    top: 0
  },
  image: {
    flex: 1,
    opacity: 0.4,
    width: 120,
    marginLeft: 20,
  },
  searchInput: {
    flex: 1,
    height: 50,
    backgroundColor: "#FFAFAC",
    color: "#FFF",
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 16,
    fontFamily: "monospace",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    elevation: 2,
  },

  cardPokemon: {
    top: 100,
    height: 85,
    marginBottom: 15,
    borderRadius: 15,
    marginHorizontal: 20,
  },

  titleCard: {
    color: "#FFF",
    fontSize: 17,
    position: "absolute",
    right: 20,
    top: 5,
    fontFamily: "monospace",
    fontWeight: "bold",
  },

  typeText: {
    fontSize: 15,
    fontFamily: "monospace",
    fontWeight: "bold",
    borderRadius: 15,
    paddingHorizontal: 25,
    paddingVertical: 2,
    marginLeft: 5,
    borderWidth: 1,
  },
  typeCards: {
    flexDirection: "row",
    position: "absolute",
    right: 10,
    bottom: 10,
  },
});

export default Main;
