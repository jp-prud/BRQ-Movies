import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SignInScreen } from '../screens';

import {
  AuthStackParamList,
  NAVIGATOR_STACK_SCREEN_OPTIONS
} from './navigationTypes';


interface Props {
  initialRouteName?: keyof AuthStackParamList;
}

const { Navigator, Screen } = createNativeStackNavigator<AuthStackParamList>();

export function AuthStack({ initialRouteName = 'SignInScreen' }: Props) {
  return (
    <Navigator
      initialRouteName={initialRouteName}
      screenOptions={NAVIGATOR_STACK_SCREEN_OPTIONS}>
      <Screen name="SignInScreen" component={SignInScreen} />
    </Navigator>
  );
}
