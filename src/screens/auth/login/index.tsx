import {Button} from 'react-native';
import React from 'react';
import ScreenWrapper from '../../../components/layouts/screenWrapper/screenWrapper';
import Header from '../../../components/header';
import {RelativePathString, router} from 'expo-router';
import {ROUTES} from '@/src/navigation/routes';
import {useLoginViewModal} from './viewModal';

const LoginScreen = () => {
  const {onGoogleButtonPress} = useLoginViewModal();
  return (
    <ScreenWrapper>
      <Header title={'SIGN IN'} hideBackButton />
      <Button title="Google login" onPress={onGoogleButtonPress} />
      <Button
        title="REGISTER"
        onPress={() =>
          router.navigate(ROUTES.REGISTER as string as RelativePathString)
        }
      />
      <Button title="HOME" onPress={() => router.navigate(ROUTES.HOME)} />
    </ScreenWrapper>
  );
};

export default LoginScreen;
