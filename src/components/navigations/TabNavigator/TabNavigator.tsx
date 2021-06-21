import React from 'react';
import {View} from 'react-native';
import {
  BottomTabBar,
  BottomTabBarOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {
  BottomTabDescriptorMap,
  BottomTabNavigationEventMap,
} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import {NavigationHelpers} from '@react-navigation/core';
import {TabNavigationState, ParamListBase} from '@react-navigation/routers';

import {styles} from './styles';
import {IS_IPHONE_X} from '../../../utils/iphoneX';
import {TabBarAdvancedButton} from './TabBarAdvancedButton';
import {tabNavigationItems} from './tabNavigationItems';
import {languageTxt} from '../../../utils/languageTxt';
import {colorConstants} from '../../../utils/colorConstants';

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
                backgroundColor: colorConstants.white,
              },
            ]}
          />
        )}
      </View>
    )}
    tabBarOptions={{
      showIcon: true,
      activeTintColor: colorConstants.primary,
      inactiveTintColor: colorConstants.navInactiveTxt,
      keyboardHidesTabBar: true,
      style: styles.navigator,
      tabStyle: {
        backgroundColor: colorConstants.white,
      },
    }}>
    {tabNavigationItems.length ? (
      <>
        {tabNavigationItems.map((listItemMeta, i) => (
          <BottomBar.Screen
            key={i}
            name={listItemMeta.name}
            component={listItemMeta.component}
            options={
              listItemMeta.name === languageTxt.homeTxt
                ? {
                    tabBarButton: (props: any) => (
                      <TabBarAdvancedButton
                        bgColor={colorConstants.white}
                        {...props}
                      />
                    ),
                  }
                : listItemMeta.options
            }
          />
        ))}
      </>
    ) : null}
  </BottomBar.Navigator>
);
