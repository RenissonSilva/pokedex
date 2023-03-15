import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';

SplashScreen.preventAutoHideAsync();

import Routes from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Sansation': require('./assets/fonts/Sansation_Bold.ttf'),
  });
  
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
      <NavigationContainer onReady={onLayoutRootView}>
        <Routes />
      </NavigationContainer>
  );
}