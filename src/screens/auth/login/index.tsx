import {Button} from 'react-native';
import React from 'react';
import ScreenWrapper from '../../../components/layouts/screenWrapper/screenWrapper';
import Header from '../../../components/header';
import {router} from 'expo-router';
import {ROUTES} from '@/src/navigation/routes';
import {useLoginViewModal} from '@/src/screens/auth/login/viewmodal';

const LoginScreen = () => {
  const {test} = useLoginViewModal();
  return (
    <ScreenWrapper>
      <Header title={'SIGN IN'} hideBackButton />
      <Button title="test" onPress={test} />
      <Button title="REGISTER" onPress={() => router.push(ROUTES.REGISTER)} />
      <Button title="HOME" onPress={() => router.push(ROUTES.HOME)} />
    </ScreenWrapper>
  );
};

export default LoginScreen;
