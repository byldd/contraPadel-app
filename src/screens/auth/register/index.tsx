import React from 'react';
import ScreenWrapper from '../../../components/layouts/screenWrapper/screenWrapper';
import Header from '../../../components/header';
import InputField from '../../../components/textInput';
import CustomButton from '../../../components/button/customButton';
import {router} from 'expo-router';
import {ROUTES} from '@/src/navigation/routes';

const RegisterScreen = () => {
  return (
    <ScreenWrapper>
      <Header title={'SIGN UP'} />
      <InputField />
      <CustomButton
        rounded
        disabled
        title="Create account"
        onPress={() => router.push(ROUTES.HOME)}
      />
    </ScreenWrapper>
  );
};

export default RegisterScreen;
