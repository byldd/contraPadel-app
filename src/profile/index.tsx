import {View, Text, Button} from 'react-native';
import React from 'react';
import {ROUTES} from '../navigation/routes';
import {useNavigation} from '@react-navigation/native';
import {Navigation} from '../types/navigation.type';

const ProfileScreen = () => {
  const navigation: Navigation = useNavigation();

  return (
    <View>
      <Text>ProfileScreen</Text>
      <Button title="Home" onPress={() => navigation.navigate(ROUTES.HOME)} />
    </View>
  );
};

export default ProfileScreen;
