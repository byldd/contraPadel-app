import {Button} from 'react-native';
import React from 'react';
import {ROUTES} from '../../navigation/routes';
import {useNavigation} from '@react-navigation/native';
import {Navigation} from '../../types/navigation.type';
import ScreenWrapper from '../../components/layouts/screenWrapper/screenWrapper';
import Header from '../../components/header';

const ProfileScreen = () => {
  const navigation: Navigation = useNavigation();

  return (
    <ScreenWrapper scrollEnabled headerComponent={<Header title={'PROFILE'} />}>
      <Button title="Home" onPress={() => navigation.navigate(ROUTES.HOME)} />
    </ScreenWrapper>
  );
};

export default ProfileScreen;
