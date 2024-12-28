import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Routes} from './Routes';
import Home from '../screens/Home/Home';

const Stack = createStackNavigator();

const MainNavigation = () => (
  <Stack.Navigator
    initialRouteName={Routes.Home}
    screenOptions={{headerShown: false}}>
    <Stack.Screen name={Routes.Home} component={Home} />
  </Stack.Navigator>
);

export default MainNavigation;
