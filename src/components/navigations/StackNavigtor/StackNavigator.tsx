import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Home} from '../../screens/Home';
import {Navs} from '../../screens/Navs';
import {News} from '../../screens/News';
import {Returns} from '../../screens/Returns';
import {ContactUs} from '../../screens/ContactUs';
import {languageTxt} from '../../../utils/languageTxt';

const Stack: any = createStackNavigator();
const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={languageTxt.homeTxt}
        component={Home}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
const ContactUsStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={languageTxt.contactusTxt}
        component={ContactUs}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
const NavsStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={languageTxt.navTxt}
        component={Navs}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
const ReturnsStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={languageTxt.returnsTxt}
        component={Returns}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
const NewsStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={languageTxt.newsTxt}
        component={News}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export {
  HomeStackNavigator,
  ContactUsStackNavigator,
  NavsStackNavigator,
  ReturnsStackNavigator,
  NewsStackNavigator,
};
