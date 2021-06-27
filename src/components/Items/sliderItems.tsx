import React from 'react';

import {languageTxt} from '../../utils/languageTxt';
import {colorConstants} from '../../utils/colorConstants';

import MutualFundsIcon from '../../assets/icons/guest_screen/mutualFunds.svg';

export const sliderItems = [
  {
    key: 1,
    title: languageTxt.homeCardtitle,
    paragraph: languageTxt.homeCarddescription,
    icon: (
      <MutualFundsIcon
        width={'100%'}
        height={120}
        fill={colorConstants.white}
      />
    ),
  },
  {
    key: 2,
    title: languageTxt.homeCardtitle,
    paragraph: languageTxt.homeCarddescription,
    icon: (
      <MutualFundsIcon
        width={'100%'}
        height={120}
        fill={colorConstants.white}
      />
    ),
  },
];
