import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { useFonts } from 'expo-font';

import Routes from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Sansation': require('./assets/fonts/Sansation_Bold.ttf'),
  });

  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}