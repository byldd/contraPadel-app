import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../home';
import ProfileScreen from '../profile';
const Tab = createBottomTabNavigator();
const BottomTab = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: true}}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTab;
