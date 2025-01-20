import {View, Text} from 'react-native';
import React from 'react';
import {Stack} from 'expo-router';
import {ROUTES} from '@/src/navigation/routes';

const _layout = () => {
  return (
    <Stack screenOptions={{headerShown: false}}>
      <Stack.Screen name={ROUTES.SPLASH} />
    </Stack>
  );
};

export default _layout;
