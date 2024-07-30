import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { OnboardingScreen, SuccessScreen } from '@screens';

import { OnboardingStackParamList } from './navigationTypes';

const Stack = createNativeStackNavigator<OnboardingStackParamList>();

export function OnboardingStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}>
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
    </Stack.Navigator>
  );
}
