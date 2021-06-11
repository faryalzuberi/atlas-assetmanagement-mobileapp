import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Home} from '../../screens/Home';
import {Navs} from '../../screens/Navs';
import {News} from '../../screens/News';
import {Returns} from '../../screens/Returns';
import {ContactUs} from '../../screens/ContactUs';
import {AppHeader} from '../../shared/AppHeader';

const Stack: any = createStackNavigator();
const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: () => <AppHeader />,
        }}
      />
    </Stack.Navigator>
  );
};
const ContactUsStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ContactUs"
        component={ContactUs}
        options={{
          header: () => <AppHeader />,
        }}
      />
    </Stack.Navigator>
  );
};
const NavsStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Navs"
        component={Navs}
        options={{
          header: () => <AppHeader />,
        }}
      />
    </Stack.Navigator>
  );
};
const ReturnsStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Returns"
        component={Returns}
        options={{
          header: () => <AppHeader />,
        }}
      />
    </Stack.Navigator>
  );
};
const NewsStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="News"
        component={News}
        options={{
          header: () => <AppHeader />,
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
