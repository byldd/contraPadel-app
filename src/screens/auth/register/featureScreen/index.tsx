import {View, Text} from 'react-native';
import React from 'react';
import ScreenWrapper from '@/src/components/layouts/screenWrapper/screenWrapper';
import CustomButton from '@/src/components/button/customButton';
import {router} from 'expo-router';
import {ROUTES} from '@/src/navigation/routes';

const FeatureScreen = () => {
  return (
    <ScreenWrapper>
      <Text>FeatureScreen</Text>
      <CustomButton
        title="Start"
        rounded
        onPress={() => router.navigate(ROUTES.QUESTION)}
      />
      <CustomButton
        title="Skip for now"
        rounded
        outlined
        onPress={() => router.navigate(ROUTES.HOME)}
      />
    </ScreenWrapper>
  );
};

export default FeatureScreen;
