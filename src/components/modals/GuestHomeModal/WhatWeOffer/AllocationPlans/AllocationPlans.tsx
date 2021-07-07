import React from 'react';

import {languageTxt} from '../../../../../utils/languageTxt';
import {colorConstants} from '../../../../../utils/colorConstants';
import {TitleList} from '../../../../shared/TitleList';
import {allocationPlansItems} from '../../../../Items/whatWeOfferItems';

import WhatWeOfferIcon from '../../../../../assets/icons/guest_screen/whatWeOffer.svg';

export const AllocationPlans = () => {
  return (
    <TitleList
      title={languageTxt.allocationPlansTxt}
      icon={
        <WhatWeOfferIcon
          width={'60'}
          height={'60'}
          fill={colorConstants.white}
        />
      }
      arrayList={allocationPlansItems}
      interval={1}
    />
  );
};
