import React from 'react';

import {whatWeOfferItems} from '../../../Items/whatWeOfferItems';
import {languageTxt} from '../../../../utils/languageTxt';
import {colorConstants} from '../../../../utils/colorConstants';
import {DashboardLayoutsContainer} from '../../../layouts/DashboardLayoutsContainer';

import WhatWeOfferIcon from '../../../../assets/icons/guest_screen/whatWeOffer.svg';

export const WhatWeOffer = () => {
  return (
    <DashboardLayoutsContainer
      title={languageTxt.whatWeOfferTxt}
      icon={
        <WhatWeOfferIcon
          width={'60'}
          height={'60'}
          fill={colorConstants.white}
        />
      }
      arrayList={whatWeOfferItems}
      interval={2}
    />
  );
};
