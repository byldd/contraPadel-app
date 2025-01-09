import {Text, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../../navigation/routes';
import {Navigation} from '../../../types/navigation.type';
import ScreenWrapper from '../../../components/layouts/screenWrapper/screenWrapper';

const LoginScreen = () => {
  const navigation: Navigation = useNavigation();

  return (
    <ScreenWrapper>
      <Text>LoginScreen</Text>
      <Button
        title="REGISTER"
        onPress={() => navigation.navigate(ROUTES.REGISTER)}
      />
      <Button
        title="HOME"
        onPress={() => navigation.navigate(ROUTES.BOTTOMTAB)}
      />
    </ScreenWrapper>
  );
};

export default LoginScreen;
