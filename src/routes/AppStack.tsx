import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { DetailsMovieScreen, HomeScreen } from '../screens';

import { TabNavigationStack } from './TabNavigationStack';
import {
  AppStackParamList,
  NAVIGATOR_STACK_SCREEN_OPTIONS,
} from './navigationTypes';

const { Navigator, Screen } = createNativeStackNavigator<AppStackParamList>();

interface Props {
  initialRouteName?: keyof AppStackParamList;
}

export function AppStack({ 
  initialRouteName = 'AppTabNavigator',
}: Props) {
  return (
    <Navigator
      initialRouteName={initialRouteName}
      screenOptions={NAVIGATOR_STACK_SCREEN_OPTIONS}
    >
      <Screen name="AppTabNavigator" component={TabNavigationStack} />

      <Screen name="HomeScreen" component={HomeScreen}/>
      <Screen name="DetailsMovieScreen" component={DetailsMovieScreen} />
    </Navigator>
  );
}
