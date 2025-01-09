import {Text, Button} from 'react-native';
import React from 'react';
import {ROUTES} from '../../navigation/routes';
import {useNavigation} from '@react-navigation/native';
import {Navigation} from '../../types/navigation.type';
import ScreenWrapper from '../../components/layouts/screenWrapper/screenWrapper';

const ProfileScreen = () => {
  const navigation: Navigation = useNavigation();

  return (
    <ScreenWrapper>
      <Text>ProfileScreen</Text>
      <Button title="Home" onPress={() => navigation.navigate(ROUTES.HOME)} />
    </ScreenWrapper>
  );
};

export default ProfileScreen;
