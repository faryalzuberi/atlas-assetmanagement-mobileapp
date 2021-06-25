import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {TabNavigator} from '../TabNavigator';

const RootStack: any = createStackNavigator();
export const RootStackNavigator = () => {
  return (
    <RootStack.Navigator initialRouteName="TabNavigator">
      <RootStack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{headerShown: false}}
      />
    </RootStack.Navigator>
  );
};
