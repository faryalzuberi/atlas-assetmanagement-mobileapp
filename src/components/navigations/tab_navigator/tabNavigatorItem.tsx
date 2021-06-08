import Home from './../../screens/main_screens/Home';
import ContactUs from './../../screens/main_screens/ContactUs';
import Navs from './../../screens/main_screens/Navs';
import Returns from './../../screens/main_screens/Returns';
import News from './../../screens/main_screens/News';

export const tabNavigatorItem = [
  {
    title: 'Navs',
    name: 'Navs',
    component: Navs,
    options: {headerShown: false},
  },
  {
    title: 'Returns',
    name: 'Returns',
    component: Returns,
    options: {headerShown: false},
  },
  {
    title: 'Home',
    name: 'Home',
    component: Home,
    options: {headerShown: false},
  },
  {
    title: 'ContactUs',
    name: 'ContactUs',
    component: ContactUs,
    options: {headerShown: false},
  },
  {
    title: 'News',
    name: 'News',
    component: News,
    options: {headerShown: false},
  },
];
