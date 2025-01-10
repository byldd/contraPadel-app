import {Button} from 'react-native';
import React from 'react';
import {ROUTES} from '../../../navigation/routes';
import {useNavigation} from '@react-navigation/native';
import {Navigation} from '../../../types/navigation.type';
import ScreenWrapper from '../../../components/layouts/screenWrapper/screenWrapper';
import Header from '../../../components/header';

const RegisterScreen = () => {
  const navigation: Navigation = useNavigation();

  return (
    <ScreenWrapper>
      <Header title={'SIGN UP'} hideBackButton />

      <Button title="LOGIN" onPress={() => navigation.navigate(ROUTES.LOGIN)} />
    </ScreenWrapper>
  );
};

export default RegisterScreen;
