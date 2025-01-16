import React from 'react';
import {ROUTES} from '../../../navigation/routes';
import {useNavigation} from '@react-navigation/native';
import {Navigation} from '../../../types/navigation.type';
import ScreenWrapper from '../../../components/layouts/screenWrapper/screenWrapper';
import Header from '../../../components/header';
import CustomButton from '../../../components/button/customButton';

const RegisterScreen = () => {
  const navigation: Navigation = useNavigation();

  return (
    <ScreenWrapper>
      <Header title={'SIGN UP'} hideBackButton />
      <CustomButton
        rounded
        disabled
        title="Create account"
        onPress={() => navigation.navigate(ROUTES.HOME)}
      />
      <CustomButton
        rounded
        outlined
        title="LOGIN"
        onPress={() => navigation.navigate(ROUTES.LOGIN)}
      />
    </ScreenWrapper>
  );
};

export default RegisterScreen;
