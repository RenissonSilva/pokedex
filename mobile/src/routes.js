import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import colors from './global/styles/theme'
import Main from './pages/Main';
import Detail from './pages/Detail';
const Stack = createNativeStackNavigator();

export function Routes() {
  return <Stack.Navigator initialRouteName="Main">
  <Stack.Screen name="Main" component={Main} 
    options={() => ({ 
      title: 'Pokédex',
      headerStyle: {
        backgroundColor: '#FF6F69'
      },
      headerTitleStyle:{
        fontSize: 23,
        fontFamily: 'Sansation',
      },
      headerTintColor: '#fff',
      headerTitleAlign: 'center'
    })}
  />
  <Stack.Screen name="Detail" component={Detail} 
    options={({ route }) => ({ 
      title: route.params.name,
      headerStyle: {
        backgroundColor: colors.backgroundCard[route.params.mainType],
      },
      headerTitleStyle:{
        fontSize: 23,
        fontFamily: 'Sansation',
      },
      headerTintColor: colors.detailBorder[route.params.mainType],
      headerTitleAlign: 'center'
    })}
  />
</Stack.Navigator>
}

export default Routes; 