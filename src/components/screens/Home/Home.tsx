import React from 'react';

import {HomeMenu} from './HomeMenu';
import ModalStackScreen from '../../shared/ModalStackScreen/ModalStackScreen';

export const Home = ({navigation}: any) => {
  const items = [
    {
      title: 'HomeMenu',
      name: 'HomeMenu',
      component: HomeMenu,
      handleOnBack: () => navigation.goBack(),
    },
  ];
  return <ModalStackScreen items={items} />;
};
