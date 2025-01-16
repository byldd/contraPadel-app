import React from 'react';
import {ROUTES} from '../../../navigation/routes';
import {useNavigation} from '@react-navigation/native';
import {Navigation} from '../../../types/navigation.type';
import ScreenWrapper from '../../../components/layouts/screenWrapper/screenWrapper';
import CustomButton from '../../../components/button/customButton';
import {Column, Row} from '../../../components/tools';
import {commonStyles} from '../../../styles/commonStyles';

const SplashScreen = () => {
  const navigation: Navigation = useNavigation();

  return (
    <ScreenWrapper>
      <Column justifyContent="center" style={[commonStyles.fullFlex]}>
        <CustomButton
          rounded
          title="REGISTER"
          onPress={() => navigation.navigate(ROUTES.REGISTER)}
        />
        <CustomButton
          rounded
          title="LOGIN"
          outlined
          onPress={() => navigation.navigate(ROUTES.LOGIN)}
        />
        <Row justifyContent="space-between">
          <CustomButton
            rounded
            title="LOGIN"
            small
            halfWidth
            onPress={() => navigation.navigate(ROUTES.LOGIN)}
          />
          <CustomButton
            rounded
            title="LOGIN"
            outlined
            small
            halfWidth
            onPress={() => navigation.navigate(ROUTES.LOGIN)}
          />
        </Row>
        <Row justifyContent="space-between">
          <CustomButton
            title="LOGIN"
            outlined
            small
            halfWidth
            onPress={() => navigation.navigate(ROUTES.LOGIN)}
          />
          <CustomButton
            title="LOGIN >"
            small
            halfWidth
            onPress={() => navigation.navigate(ROUTES.LOGIN)}
          />
        </Row>
      </Column>
    </ScreenWrapper>
  );
};

export default SplashScreen;
