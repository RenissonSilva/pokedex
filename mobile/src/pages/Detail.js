import React from "react";
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

function Detail({ navigation }) {
  // componentDidMount() {
  //   this.loadPokemons();
  // }

  // loadPokemons = async () => {
  //   const reponse = await api.get('/api/v2/');

  //   const { docs } = reponse.data;

  //   console.log(docs);
  // };
  return (
    <ScrollView>
      <StatusBar barStyle="light-content" backgroundColor="#60CD8B" />
      <View style={styles.viewInfoPoke}>
        <ImageBackground
          source={{
            uri: "https://pokeres.bastionbot.org/images/pokemon/1.png",
          }}
          style={styles.image}
        ></ImageBackground>
        <Text style={styles.description}>
          Bulbasaur can be seen napping in bright sunlight. There is a seed on
          its back. By soaking up the sun's rays, the seed grows progressively
          larger.
        </Text>
      </View>
      <View style={styles.viewStatusPoke}>
        <Text style={styles.title}>Stats</Text>
        <Text style={styles.subTitle}>Height: 0.7 m</Text>
        <Text style={styles.subTitle}>Weight: 6.9 kg</Text>
        <Text style={styles.subTitle}>Category: Seed</Text>
        <Text style={styles.title}>Type</Text>

        <View style={styles.divTypes}>
          <TouchableOpacity style={[styles.btn, styles.grass]}>
            <Text style={styles.name}>Grass</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btn, styles.poison]}>
            <Text style={styles.name}>Poison</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>Weaknesses</Text>

        <View style={styles.divTypes}>
          <TouchableOpacity style={[styles.btn, styles.fire]}>
            <Text style={styles.name}>Fire</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btn, styles.psychic]}>
            <Text style={styles.name}>Psychic</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.divTypes}>
          <TouchableOpacity style={[styles.btn, styles.flying]}>
            <Text style={[styles.name, styles.flying]}>Flying</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btn, styles.ice]}>
            <Text style={styles.name}>Ice</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Abilities</Text>
        <Text style={styles.subTitle}>Overgrow</Text>
        <Text style={styles.subTitle}>Chlorophyll</Text>
      </View>
      {/* <Text>
        ID: {JSON.stringify(navigation.getParam('pokeID'))}
      </Text> */}
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
    backgroundColor: "#A4D5B7",
    height: "100%",
    marginBottom: 30,
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
  },
  btn: {
    width: 150,
    height: 38,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#fff",
    justifyContent: "center",
    fontWeight: "bold",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
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
