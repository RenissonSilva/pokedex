import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  StyleSheet,
} from "react-native";
import api from "./api";
import colors from '../global/styles/theme'


function Detail({ route, navigation }) {
  const { pokeID, formattedId, mainType, secondaryType } = route.params;

  const [ pokemon, setPokemon ] = useState({
    height: null,
    weight: null,
    name: null,
    abilities: [],
    types: null,
    description: null,
  });

  useEffect(() => {
    async function pokemonDetails() {
      const response = await api.get(`/pokemon/${pokeID}`)
      let { name, height, weight, abilities, types } = response.data;
      const description = await api.get(`/pokemon-species/${pokeID}`)
      const { flavor_text_entries } = description.data;
      
      abilities = abilities.map((x) => x.ability.name);
      setPokemon({
        name, height, weight, abilities, types, description: flavor_text_entries[0].flavor_text
      })
    }

    pokemonDetails();
  }, [])

  return (
    <ScrollView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" backgroundColor={colors.backgroundCard[mainType]} />
      <View style={styles.viewInfoPoke}>
        <ImageBackground
          source={{
            uri: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${formattedId}.png`,
          }}
          style={styles.image}
        ></ImageBackground>
        <Text style={[
          styles.description,
          { color: colors.backgroundCard[mainType] }
          ]}>
          {pokemon.description}
        </Text>
      </View>
      <View style={[
        styles.viewStatusPoke,
        { backgroundColor: colors.backgroundCard[mainType] }
      ]}>
        <Text style={styles.title}>Stats</Text>
        <Text style={styles.subTitle}>Height: {pokemon.height} m</Text>
        <Text style={styles.subTitle}>Weight: {pokemon.weight} kg</Text>
        <Text style={styles.title}>Type</Text>

        <View style={styles.divTypes}>
          <TouchableOpacity style={[
              styles.btn, 
              { backgroundColor: colors.backgroundCard[mainType], borderColor: colors.detailBorder[mainType]}
            ]}>
            <Text style={styles.name}>{mainType.charAt(0).toUpperCase() + mainType.slice(1)}</Text>
          </TouchableOpacity>
          {secondaryType &&
            <TouchableOpacity style={[
                styles.btn,
                { backgroundColor: colors.backgroundCard[secondaryType], borderColor: colors.detailBorder[secondaryType]}
              ]}>
              <Text style={styles.name}>{secondaryType.charAt(0).toUpperCase() + secondaryType.slice(1)}</Text>
            </TouchableOpacity>
          }
        </View>
        
        <Text style={styles.title}>Abilities</Text>
        {pokemon.abilities.length > 0 && <Text style={styles.subTitle}>{pokemon.abilities[0]}</Text>}
        {pokemon.abilities.length > 1 && <Text style={styles.subTitle}>{pokemon.abilities[1]}</Text>}
        {pokemon.abilities.length > 2 && <Text style={styles.subTitle}>{pokemon.abilities[2]}</Text>}
        {pokemon.abilities.length > 3 && <Text style={styles.subTitle}>{pokemon.abilities[3]}</Text>}
        {pokemon.abilities.length > 4 && <Text style={styles.subTitle}>{pokemon.abilities[4]}</Text>}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: 180,
    height: 180,
    marginTop: 5,
  },
  viewInfoPoke: {
    alignItems: "center",
    height: 300,
    backgroundColor: "#fff",
    opacity: 0.9,
  },
  description: {
    fontSize: 16,
    fontFamily: "monospace",
    color: "#447D65",
    margin: 20,
    fontWeight: "bold",
    opacity: 0.7,
    textAlign: "justify",
  },
  viewStatusPoke: {
    // backgroundColor: {backgroundColor={colors.backgroundCard[mainType]}},
    height: "100%",
    marginBottom: 80,
    // flex: 1
  },
  title: {
    color: "#fff",
    fontSize: 21,
    fontFamily: "monospace",
    marginHorizontal: 20,
    marginVertical: 15,
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  subTitle: {
    color: "#fff",
    fontFamily: "monospace",
    marginLeft: 40,
    marginBottom: 10,
    fontSize: 17,
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 15,
    textTransform: 'capitalize'
  },
  btn: {
    width: 150,
    height: 38,
    borderRadius: 12,
    borderWidth: 2,
    // borderColor: "#fff",
    justifyContent: "center",
    fontWeight: "bold",
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  name: {
    color: "#fff",
    textAlign: "center",
    fontFamily: "monospace",
    fontWeight: "bold",
    fontSize: 18,
  },
  divTypes: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 25,
    marginBottom: 15,
  },
  grass: {
    backgroundColor: "#068f13",
  },
  poison: {
    backgroundColor: "#9364f5",
  },
  fire: {
    backgroundColor: "#ff7373",
  },
  psychic: {
    backgroundColor: "#e39dc7",
  },
  flying: {
    backgroundColor: "#cff6ff",
    color: "#757575",
  },
  ice: {
    backgroundColor: "#4be3c8",
  },
});

export default Detail;
