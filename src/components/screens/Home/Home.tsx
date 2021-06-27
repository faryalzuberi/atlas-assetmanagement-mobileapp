import React from 'react';

import ModalStackScreen from '../../shared/ModalStackScreen/ModalStackScreen';
import {GuestHomeModal} from '../../modals/GuestHomeModal';

import {AboutUs} from '../../modals/GuestHomeModal/AboutUs';
import {VisionMission} from '../../modals/GuestHomeModal/AboutUs/VisionMission';
import {Introduction} from '../../modals/GuestHomeModal/AboutUs/Introduction';
import {BoardOfDirectors} from '../../modals/GuestHomeModal/AboutUs/BoardOfDirectors';
import {ManagementTeam} from '../../modals/GuestHomeModal/AboutUs/ManagementTeam';

import {WhatWeOffer} from '../../modals/GuestHomeModal/WhatWeOffer';

export const Home = ({navigation}: any) => {
  const items = [
    {
      name: 'GuestHomeModal',
      component: GuestHomeModal,
      backButton: false,
      handleOnBack: () => {},
    },
    // Start AboutUs
    {
      name: 'AboutUs',
      component: AboutUs,
      backButton: true,
      handleOnBack: () => navigation.navigate('GuestHomeModal'),
    },
    {
      name: 'VisionMission',
      component: VisionMission,
      backButton: true,
      handleOnBack: () => navigation.navigate('AboutUs'),
    },
    {
      name: 'Introduction',
      component: Introduction,
      backButton: true,
      handleOnBack: () => navigation.navigate('AboutUs'),
    },
    {
      name: 'BoardOfDirectors',
      component: BoardOfDirectors,
      backButton: true,
      handleOnBack: () => navigation.navigate('AboutUs'),
    },
    {
      name: 'ManagementTeam',
      component: ManagementTeam,
      backButton: true,
      handleOnBack: () => navigation.navigate('AboutUs'),
    },
    // End AboutUs
    {
      name: 'WhatWeOffer',
      component: WhatWeOffer,
      backButton: true,
      handleOnBack: () => navigation.navigate('GuestHomeModal'),
    },
  ];
  return <ModalStackScreen items={items} />;
};
