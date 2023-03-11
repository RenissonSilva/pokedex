import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import colors from '../global/styles/theme'

export function Card({ pokemon }) {
    const formattedId = ("00" + pokemon.id).slice(-3)
    const mainType = pokemon.types[0]?.type?.name ?? null;
    const secondaryType = pokemon.types[1]?.type?.name ?? null;

    return (
        <TouchableOpacity
        onPress={() => navigation.navigate("Detail", { pokeID: 1 })}
        style={[styles.cardPokemon, { backgroundColor: colors.backgroundCard[mainType] }]}
      >
        <Text style={styles.titleCard}>{pokemon.name} #{pokemon.id}</Text>
        <View style={styles.typeCards}>
          <Text
            style={[
              styles.typeText,
              { color: colors.boxType[mainType], borderColor: colors.boxType[mainType] },
            ]}
          >
            {mainType.charAt(0).toUpperCase() + mainType.slice(1)}
          </Text>
          {secondaryType && (
            <Text
              style={[
                styles.typeText,
                { color: colors.boxType[secondaryType], borderColor: colors.boxType[secondaryType] },
              ]}
            >
              {secondaryType.charAt(0).toUpperCase() + secondaryType.slice(1)}
            </Text>
          )}
        </View>
        <ImageBackground
          source={{
            uri: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${formattedId}.png`,
          }}
          style={styles.image}
        ></ImageBackground>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    searchForm: {
      position: "absolute",
      top: 20,
      left: 40,
      right: 40,
      flexDirection: "row",
    },
    image: {
      flex: 1,
      opacity: 0.4,
      width: 150,
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
      textTransform: 'capitalize'
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