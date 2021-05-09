import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Home from './screens/Home/Home.screen';
import PokeDetails from './screens/PokeDetails/PokeDetails.screen';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen name="PokeDetails" component={PokeDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
