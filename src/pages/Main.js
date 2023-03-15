import React, { useEffect, useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  ScrollView,
  ActivityIndicator
} from "react-native";
import api from "./api";
import { Card } from '../components/Card'

function Main({ navigation }) {
  const [pokemons, setPokemons] = useState([]);
  const [allPokemons, setAllPokemons] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getAllPokemons() {
      const response = await api.get('/pokemon?limit=151&offset=0')
      const { results } = response.data;

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
      setIsLoading(false)
      setPokemons(payloadPokemons);
      setAllPokemons(payloadPokemons);
    }

    getAllPokemons();
  }, [])

  async function getMoreInfo(url) {
      const response = await api.get(url)
      const { id, types } = response.data;

      return { id, types }
  }

  useEffect(() => {
    if(searchName == '') {
      setPokemons(allPokemons);
    } else {
      let filtered_pokemons = allPokemons.filter((item) => {
        return item.name.toLowerCase().indexOf(searchName.toLowerCase()) !== -1;
      });
      setPokemons(filtered_pokemons);
    }
  }, [searchName])

  return (
    <ScrollView>
      <View style={styles.searchForm}>
        <TextInput
          style={styles.searchInput}
          placeholder="Pesquise por nome"
          placeholderTextColor="#FFF"
          autoCapitalize="words"
          autoCorrect={false}
          onChangeText={setSearchName}
        />
      </View>
      <View style={styles.pokemonsListView}>
        {isLoading && <ActivityIndicator size="large" color="#FF6F69"/>}
        {pokemons?.map((item) => 
          <Card pokemon={item} key={item.id}/>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  pokemonsListView: {
    padding: 0,
    margin: 0,
    bottom: 0,
    marginTop: 100
  },
  searchForm: {
    position: "absolute",
    top: 20,
    left: 30,
    right: 30,
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
});

export default Main;
