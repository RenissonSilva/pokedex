import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Detail from './pages/Detail';

const Routes = createAppContainer(
  createStackNavigator({
    Main:{
      screen: Main,
      navigationOptions:{
        title:'Pokédex'
      },
    },
    Detail:{
      screen: Detail,
      navigationOptions:{
        title:'Bulbasaur',
        headerStyle:{
          backgroundColor:'#60CD8B',
        },
      }
    },
  },{
    defaultNavigationOptions:{
      headerTintColor:'#FFF',
      headerStyle:{
        backgroundColor:'#FF6F69',
      },
      headerTitleStyle: {
        fontFamily: 'monospace',
        alignSelf: 'center',
        fontWeight: 'bold',
        
      },
      headerTitleContainerStyle: {
        left: 0,
      },
    }
  })
);

export default Routes; 