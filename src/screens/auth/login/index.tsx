import {Text, SafeAreaView, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../../navigation/routes';
import {Navigation} from '../../../types/navigation.type';

const LoginScreen = () => {
  const navigation: Navigation = useNavigation();

  return (
    <SafeAreaView>
      <Text>LoginScreen</Text>
      <Button
        title="REGISTER"
        onPress={() => navigation.navigate(ROUTES.REGISTER)}
      />
      <Button
        title="HOME"
        onPress={() => navigation.navigate(ROUTES.BOTTOMTAB)}
      />
    </SafeAreaView>
  );
};

export default LoginScreen;
