import {Button} from 'react-native';
import React from 'react';
import ScreenWrapper from '../../components/layouts/screenWrapper/screenWrapper';
import Header from '../../components/header';
import {router} from 'expo-router';
import {ROUTES} from '@/src/navigation/routes';

const HomeScreen = () => {
  return (
    <>
      <ScreenWrapper scrollEnabled headerComponent={<Header title={'HOME'} />}>
        <Button
          title="Profile"
          onPress={() => router.navigate(ROUTES.PROFILE)}
        />
      </ScreenWrapper>
    </>
  );
};

export default HomeScreen;
