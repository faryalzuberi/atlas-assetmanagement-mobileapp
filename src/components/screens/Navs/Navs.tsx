import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import ModalStackScreen from '../../layouts/ModalStackScreen/ModalStackScreen';
import { NavHomeModal } from '../../modals/NavHomeModal';
import { NavHistory } from '../../modals/NavHomeModal/NavHistory';

export const Navs = ({navigation}: any) => {
  const items = [
    {
      name: 'NavHomeModal',
      component: NavHomeModal,
      backButton: false,
      handleOnBack: () => {},
    },
    {
      name: 'NavHistory',
      component: NavHistory,
      backButton: true,
      handleOnBack: () => navigation.navigate('NavHomeModal'),
    },]
  return (
    <SafeAreaView style={{flex: 1}}>
      <ModalStackScreen items={items} />
    </SafeAreaView>
  );
};
