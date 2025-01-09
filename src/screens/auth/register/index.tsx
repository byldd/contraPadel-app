import {Text, SafeAreaView, Button} from 'react-native';
import React from 'react';
import {ROUTES} from '../../../navigation/routes';
import {useNavigation} from '@react-navigation/native';
import {Navigation} from '../../../types/navigation.type';

const RegisterScreen = () => {
  const navigation: Navigation = useNavigation();

  return (
    <SafeAreaView>
      <Text>RegisterScreen</Text>
      <Button title="LOGIN" onPress={() => navigation.navigate(ROUTES.LOGIN)} />
    </SafeAreaView>
  );
};

export default RegisterScreen;
