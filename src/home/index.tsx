import {View, Text, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../navigation/routes';
import {Navigation} from '../types/navigation.type';

const HomeScreen = () => {
  const navigation: Navigation = useNavigation();
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title="Profile"
        onPress={() => navigation.navigate(ROUTES.PROFILE)}
      />
    </View>
  );
};

export default HomeScreen;
