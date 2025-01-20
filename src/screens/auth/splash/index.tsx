import React from 'react';
import ScreenWrapper from '../../../components/layouts/screenWrapper/screenWrapper';
import CustomButton from '../../../components/button/customButton';
import {Column, Row} from '../../../components/tools';
import {commonStyles} from '../../../styles/commonStyles';
import {ROUTES} from '@/src/navigation/routes';
import {router} from 'expo-router';
import {logger} from '@/src/utils/commonFunctions';

const SplashScreen = () => {
  return (
    <ScreenWrapper>
      <Column justifyContent="center" style={[commonStyles.fullFlex]}>
        <CustomButton
          rounded
          title="Register"
          onPress={() => router.navigate(ROUTES.REGISTER)}
        />
        <CustomButton
          rounded
          title="Log in"
          outlined
          onPress={() => router.navigate(ROUTES.LOGIN)}
        />
      </Column>
    </ScreenWrapper>
  );
};

export default SplashScreen;
