import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigator from './../tab_navigator/index';

const RootStack = createStackNavigator();
const RootStackNavigator = () => {
  return (
    <>
      <RootStack.Navigator initialRouteName="TabNavigator">
        <RootStack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{headerShown: false}}
        />
      </RootStack.Navigator>
    </>
  );
};
export default RootStackNavigator;
