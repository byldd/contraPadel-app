import React from 'react';
import ScreenWrapper from '../../../components/layouts/screenWrapper/screenWrapper';
import CustomButton from '../../../components/button/customButton';
import {Column, Row} from '../../../components/tools';
import {commonStyles} from '../../../styles/commonStyles';
import {ROUTES} from '@/src/navigation/routes';
import {router} from 'expo-router';

const SplashScreen = () => {
  return (
    <ScreenWrapper>
      <Column justifyContent="center" style={[commonStyles.fullFlex]}>
        <CustomButton
          rounded
          title="Register"
          onPress={() => router.push(ROUTES.REGISTER)}
        />
        <CustomButton
          rounded
          title="Log in"
          outlined
          onPress={() => router.push(ROUTES.LOGIN)}
        />
      </Column>
    </ScreenWrapper>
  );
};

export default SplashScreen;
