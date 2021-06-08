import React from 'react';
import {SafeAreaView} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {tabNavigatorItem} from './tabNavigatorItem';

const Tab = createBottomTabNavigator();
function TabNavigator() {
  return (
    <SafeAreaView style={{flex: 1}} edges={['top']}>
      <Tab.Navigator initialRouteName="Home">
        {tabNavigatorItem.map((listItem, i) => (
          <Tab.Screen
            key={i}
            name={listItem.name}
            component={listItem.component}
            options={listItem.options}
          />
        ))}
      </Tab.Navigator>
    </SafeAreaView>
  );
}

export default TabNavigator;
