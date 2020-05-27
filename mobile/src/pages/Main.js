import React from 'react';
import { View, TextInput,TouchableOpacity,StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

function Main(){
  return (
    <View style={styles.searchForm}>
      <TextInput style={styles.searchInput}
        placeholder="Pesquise por nome"
        placeholderTextColor="#FFF"
        autoCapitalize="words"
        autoCorrect={false}
        />
        
    </View>
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

  })

export default Main; 