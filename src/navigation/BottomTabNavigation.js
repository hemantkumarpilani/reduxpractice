import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeController from '../screens/bottomTabScreens/Home/HomeController';
import UserController from '../screens/bottomTabScreens/User/UserController';

const BottomTabNavigation = () => {
  const BottomTabNavigator = createBottomTabNavigator();
  return (
    <BottomTabNavigator.Navigator screenOptions={{headerShown: false}}>
      <BottomTabNavigator.Screen name="Home" component={HomeController} />
      <BottomTabNavigator.Screen name="User" component={UserController} />
    </BottomTabNavigator.Navigator>
  );
};

export default BottomTabNavigation;
