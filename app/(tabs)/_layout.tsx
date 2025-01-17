import {View, Text} from 'react-native';
import React from 'react';
import {Tabs} from 'expo-router';
import {theme} from '@/src/infrastructure/theme';
import {ROUTES} from '@/src/navigation/routes';
import {commonStyles} from '@/src/styles/commonStyles';
import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const _layout = () => {
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
        {routeName.includes('profile') ? 'Profile' : 'Home'}
      </Text>
    ),
  });
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarItemStyle: {},
        tabBarStyle: {
          backgroundColor: theme.colors.ui.transparent,
          borderTopWidth: 0,
          position: 'absolute',
          bottom: 0,
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
      <Tabs.Screen name="index" options={() => tabScreenOptions(ROUTES.HOME)} />
      <Tabs.Screen
        name="profile/index"
        options={() => tabScreenOptions(ROUTES.PROFILE)}
      />
    </Tabs>
  );
};

export default _layout;
