import React from 'react';

import ModalStackScreen from '../../shared/ModalStackScreen/ModalStackScreen';
import {ContactUsForm} from './ContactUsForm';

export const ContactUs = ({navigation}: any) => {
  const items = [
    {
      name: 'ContactUsForm',
      component: ContactUsForm,
      backButton: false,
      handleOnBack: () => {},
    },
  ];
  return <ModalStackScreen items={items} />;
};
