import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {Routes} from './Routes';
import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile';
import ProfileTabTitle from '../components/ProfileTabTitle/ProfileTabTitle';
import ProfileTabContent from '../components/ProfileTabContent/ProfileTabContent';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const ProfileTabs = createMaterialTopTabNavigator();

export const ProfileTabsNavigation = () => (
  <ProfileTabs.Navigator
    screenOptions={{
      tabBarIndicatorStyle: {backgroundColor: 'transparent'},
      tabBarStyle: {
        zIndex: 0,
        elevation: 0,
      },
    }}>
    <ProfileTabs.Screen
      name={'Tab1'}
      component={ProfileTabContent}
      options={{
        tabBarLabel: ({focused}) => (
          <ProfileTabTitle title="Photos" isFocused={focused} />
        ),
      }}
    />
    <ProfileTabs.Screen
      name={'Tab2'}
      component={ProfileTabContent}
      options={{
        tabBarLabel: ({focused}) => (
          <ProfileTabTitle title="Videos" isFocused={focused} />
        ),
      }}
    />
    <ProfileTabs.Screen
      name={'Tab3'}
      component={ProfileTabContent}
      options={{
        tabBarLabel: ({focused}) => (
          <ProfileTabTitle title="Saved" isFocused={focused} />
        ),
      }}
    />
  </ProfileTabs.Navigator>
);

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
