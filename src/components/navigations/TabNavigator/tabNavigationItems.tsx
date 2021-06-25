import React from 'react';

import {
  NavsStackNavigator,
  ReturnsStackNavigator,
  HomeStackNavigator,
  ContactUsStackNavigator,
  NewsStackNavigator,
} from '../StackNavigtor';
import {languageTxt} from '../../../utils/languageTxt';

import NavIcon from '../../../assets/icons/guest_navigation/nav.svg';
import ReturnsIcon from '../../../assets/icons/guest_navigation/returns.svg';
import ContactUsIcon from '../../../assets/icons/guest_navigation/contactUs.svg';
import NewsIcon from '../../../assets/icons/guest_navigation/news.svg';

type IconProps = {color: string};

export const tabNavigationItems = [
  {
    name: languageTxt.navTxt,
    component: NavsStackNavigator,
    options: {
      tabBarIcon: ({color}: IconProps) => (
        <NavIcon height={25} width={30} fill={color} />
      ),
    },
  },
  {
    name: languageTxt.returnsTxt,
    component: ReturnsStackNavigator,
    options: {
      tabBarIcon: ({color}: IconProps) => (
        <ReturnsIcon height={25} width={30} fill={color} />
      ),
    },
  },
  {
    name: languageTxt.homeTxt,
    component: HomeStackNavigator,
  },
  {
    name: languageTxt.contactusTxt,
    component: ContactUsStackNavigator,
    options: {
      tabBarIcon: ({color}: IconProps) => (
        <ContactUsIcon height={25} width={30} fill={color} />
      ),
    },
  },
  {
    name: languageTxt.newsTxt,
    component: NewsStackNavigator,
    options: {
      tabBarIcon: ({color}: IconProps) => (
        <NewsIcon height={25} width={30} fill={color} />
      ),
    },
  },
];
