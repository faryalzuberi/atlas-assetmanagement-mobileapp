import React from 'react';
import {View} from 'react-native';
import {
  BottomTabBar,
  BottomTabBarOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import {
  HomeStackNavigator,
  ContactUsStackNavigator,
  NavsStackNavigator,
  ReturnsStackNavigator,
  NewsStackNavigator,
} from '../StackNavigtor';
import {styles} from './styles';
import {IS_IPHONE_X} from '../../../utils/iphoneX';
import TabBarAdvancedButton from './TabBarAdvancedButton';
import HomeIcon from '../../../assets/Icons/BottomTabNavigator/home.svg';
import {
  BottomTabDescriptorMap,
  BottomTabNavigationEventMap,
} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import {NavigationHelpers} from '@react-navigation/core';
import {TabNavigationState, ParamListBase} from '@react-navigation/routers';

const BottomBar: any = createBottomTabNavigator();

type Props = {
  barColor: string;
};

export const TabNavigator: React.FC<Props> = ({barColor}) => (
  <BottomBar.Navigator
    tabBar={(
      props: JSX.IntrinsicAttributes &
        BottomTabBarOptions & {
          state: TabNavigationState<ParamListBase>;
          descriptors: BottomTabDescriptorMap;
          navigation: NavigationHelpers<
            ParamListBase,
            BottomTabNavigationEventMap
          >;
        } & {
          activeTintColor?: string | undefined;
          inactiveTintColor?: string | undefined;
        },
    ) => (
      <View style={styles.navigatorContainer}>
        <BottomTabBar {...props} />
        {IS_IPHONE_X && (
          <View
            style={[
              styles.xFillLine,
              {
                backgroundColor: barColor,
              },
            ]}
          />
        )}
      </View>
    )}
    tabBarOptions={{
      showIcon: true,
      style: styles.navigator,
      tabStyle: {
        backgroundColor: barColor,
      },
    }}>
    <BottomBar.Screen
      name="Home"
      component={HomeStackNavigator}
      options={{
        tabBarIcon: ({color}) => <HomeIcon fill={color} />,
      }}
    />
    <BottomBar.Screen
      name="ContactUs"
      component={ContactUsStackNavigator}
      options={{
        tabBarIcon: ({color}) => <HomeIcon fill={color} />,
      }}
    />
    <BottomBar.Screen
      name="Navs"
      component={NavsStackNavigator}
      options={{
        tabBarButton: props => (
          <TabBarAdvancedButton bgColor={barColor} {...props} />
        ),
      }}
    />
    <BottomBar.Screen
      name="Returns"
      component={ReturnsStackNavigator}
      options={{
        tabBarIcon: ({color}) => <HomeIcon fill={color} />,
      }}
    />
    <BottomBar.Screen
      name="News"
      component={NewsStackNavigator}
      options={{
        tabBarIcon: ({color}) => <HomeIcon fill={color} />,
      }}
    />
  </BottomBar.Navigator>
);
