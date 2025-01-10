import React from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import HomeScreen from '../home';
import ProfileScreen from '../profile';
import {ROUTES} from '../../navigation/routes';
import Icon from 'react-native-vector-icons/Ionicons';
import {commonStyles} from '../../styles/commonStyles';
import {theme} from '../../infrastructure/theme';
import {Image, Text} from 'react-native';
import {Images} from '../../assets/images';
import {dimensions} from '../../components/tools';

const Tab = createBottomTabNavigator();

const getTabBarIcon = (routeName: string, focused: boolean) => {
  let iconName = 'home-outline';

  if (routeName === ROUTES.HOME) {
    iconName = 'home-outline';
  } else if (routeName === ROUTES.PROFILE) {
    iconName = 'person-outline';
  }

  return (
    <Icon
      size={26}
      name={iconName}
      color={focused ? theme.colors.ui.primary : theme.colors.ui.white}
    />
  );
};

const BottomTab = () => {
  const tabScreenOptions = (routeName: string): BottomTabNavigationOptions => ({
    tabBarIcon: ({focused}) => getTabBarIcon(routeName, focused),
    tabBarLabel: ({focused}) => (
      <Text
        style={{
          ...commonStyles.smallText,
          ...commonStyles.bold500,
          color: focused ? theme.colors.ui.primary : theme.colors.ui.white,
          marginTop: 6,
        }}>
        {routeName}
      </Text>
    ),
  });

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarItemStyle: {},
        tabBarStyle: {
          backgroundColor: theme.colors.ui.transparent,
          borderTopWidth: 0,
          position: 'absolute',
        },
        // tabBarBackground: () => {
        //   return (
        //     <Image
        //       source={Images.tabBg}
        //       style={{
        //         width: dimensions.width,
        //         height: 60,
        //         resizeMode: 'cover',
        //       }}
        //     />
        //   );
        // },
      }}>
      <Tab.Screen
        name={ROUTES.HOME}
        component={HomeScreen}
        options={() => tabScreenOptions(ROUTES.HOME)}
      />
      <Tab.Screen
        name={ROUTES.PROFILE}
        component={ProfileScreen}
        options={() => tabScreenOptions(ROUTES.PROFILE)}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
