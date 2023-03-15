import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import colors from '../global/styles/theme'
import { useNavigation } from '@react-navigation/native';

export function Card({ pokemon }) {
    const { navigate } = useNavigation();

    const formattedId = ("00" + pokemon.id).slice(-3)
    const mainType = pokemon.types[0]?.type?.name ?? null;
    const secondaryType = pokemon.types[1]?.type?.name ?? null;
    const formattedName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)

    return (
        <TouchableOpacity
          onPress={() => navigate("Detail", { pokeID: pokemon.id, formattedId, mainType, secondaryType, name: formattedName })}
          style={[styles.cardPokemon, { backgroundColor: colors.backgroundCard[mainType] }]}
        >
        <Text style={styles.titleCard}>{pokemon.name} #{formattedId}</Text>
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
    image: {
      flex: 1,
      opacity: 0.4,
      width: 150,
      marginLeft: 20,
    },
    cardPokemon: {
      height: 85,
      marginBottom: 15,
      borderRadius: 15,
      marginHorizontal: 20,
      position: "relative"
    },
    titleCard: {
      color: "#FFF",
      fontSize: 18,
      position: "absolute",
      right: 20,
      top: 5,
      fontFamily: "Sansation",
      textTransform: 'capitalize'
    },
    typeText: {
      fontSize: 15,
      fontFamily: "Sansation",
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