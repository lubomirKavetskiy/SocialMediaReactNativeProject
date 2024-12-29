import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {Routes} from './Routes';
import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MainMenuNavigation = () => (
  <Drawer.Navigator screenOptions={{headerTitle: ''}}>
    <Drawer.Screen name={Routes.Home} component={Home} />
    <Drawer.Screen name={Routes.Profile} component={Profile} />
  </Drawer.Navigator>
);

const MainNavigation = () => (
  <Stack.Navigator
    screenOptions={{header: () => null, headerShown: false}}
    initialRouteName="Drawer">
    <Stack.Screen name="Drawer" component={MainMenuNavigation} />
  </Stack.Navigator>
);

export default MainNavigation;
