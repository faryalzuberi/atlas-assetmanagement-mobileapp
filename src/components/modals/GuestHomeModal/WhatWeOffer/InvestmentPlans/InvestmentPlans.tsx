import React from 'react';

import {languageTxt} from '../../../../../utils/languageTxt';
import {colorConstants} from '../../../../../utils/colorConstants';
import {TitleList} from '../../../../layouts/TitleList';
import {investmentPlansItems} from '../../../../Items/whatWeOfferItems';

import WhatWeOfferIcon from '../../../../../assets/icons/guest_screen/whatWeOffer.svg';

export const InvestmentPlans = () => {
  return (
    <TitleList
      title={languageTxt.investmentPlansTxt}
      icon={
        <WhatWeOfferIcon
          width={'60'}
          height={'60'}
          fill={colorConstants.white}
        />
      }
      arrayList={investmentPlansItems}
      interval={1}
    />
  );
};
