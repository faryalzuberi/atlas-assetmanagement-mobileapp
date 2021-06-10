import React from 'react';
import {
  NavsStackNavigator,
  ReturnsStackNavigator,
  HomeStackNavigator,
  ContactUsStackNavigator,
  NewsStackNavigator,
} from '../StackNavigtor';
import {languageTxt} from '../../../utils/languageTxt';
import NavIcon from '../../../assets/Icons/GuestNavigation/Nav.svg';
import ReturnsIcon from '../../../assets/Icons/GuestNavigation/Returns.svg';
import ContactUsIcon from '../../../assets/Icons/GuestNavigation/ContactUs.svg';
import NewsIcon from '../../../assets/Icons/GuestNavigation/News.svg';

type IconProps = {color: string};
export const tabNavigationItems = [
  {
    name: languageTxt.navtxt,
    component: NavsStackNavigator,
    options: {
      tabBarIcon: ({color}: IconProps) => (
        <NavIcon height={25} width={30} fill={color} />
      ),
    },
  },
  {
    name: languageTxt.returnstxt,
    component: ReturnsStackNavigator,
    options: {
      tabBarIcon: ({color}: IconProps) => (
        <ReturnsIcon height={25} width={30} fill={color} />
      ),
    },
  },
  {
    name: languageTxt.hometxt,
    component: HomeStackNavigator,
  },
  {
    title: languageTxt.contactustxt,
    component: ContactUsStackNavigator,
    options: {
      tabBarIcon: ({color}: IconProps) => (
        <ContactUsIcon height={25} width={30} fill={color} />
      ),
    },
  },
  {
    title: languageTxt.newstxt,
    component: NewsStackNavigator,
    options: {
      tabBarIcon: ({color}: IconProps) => (
        <NewsIcon height={25} width={30} fill={color} />
      ),
    },
  },
];
