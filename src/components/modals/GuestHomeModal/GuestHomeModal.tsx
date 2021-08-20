import React from 'react';

import {guestItems} from '../../Items/guestItems';
import {sliderItems} from '../../Items/sliderItems';
import {DashboardLayoutsContainer} from '../../layouts/DashboardLayoutsContainer';

export const GuestHomeModal = () => {
  return (
    <DashboardLayoutsContainer
      sliderlist={sliderItems}
      arrayList={guestItems}
      interval={2}
    />
  );
};
