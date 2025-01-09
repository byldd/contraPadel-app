import {Text, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../navigation/routes';
import {Navigation} from '../../types/navigation.type';
import ScreenWrapper from '../../components/layouts/screenWrapper/screenWrapper';

const HomeScreen = () => {
  const navigation: Navigation = useNavigation();
  return (
    <ScreenWrapper>
      <Text>HomeScreen</Text>
      <Button
        title="Profile"
        onPress={() => navigation.navigate(ROUTES.PROFILE)}
      />
    </ScreenWrapper>
  );
};

export default HomeScreen;
