import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigation from './AuthNavigation';
import BottomTabNavigation from './BottomTabNavigation';
import {useSelector} from 'react-redux';

const RootNavigation = () => {
  const accessToken = useSelector(state => state.auth?.accessToken);
  console.log('RootNavigation', accessToken);
  return (
    <NavigationContainer>
      {accessToken ? <BottomTabNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

export default RootNavigation;
