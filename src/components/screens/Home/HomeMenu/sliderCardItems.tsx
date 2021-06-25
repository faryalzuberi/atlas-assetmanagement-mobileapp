import React from 'react';
import MutualFundsIcon from '../../../../assets/icons/guest_screen/mutualFunds.svg';
import {colorConstants} from '..//../../../utils/colorConstants';
import {languageTxt} from '../../../../utils/languageTxt';

export const sliderCardItems = [
  {
    key: 1,
    title: languageTxt.homeCardtitle,
    paragraph: languageTxt.homeCarddescription,
    imageElement: (
      <MutualFundsIcon
        width={'90%'}
        height={'100%'}
        fill={colorConstants.white}
      />
    ),
  },
  {
    key: 2,
    title: languageTxt.homeCardtitle,
    paragraph: languageTxt.homeCarddescription,
    imageElement: (
      <MutualFundsIcon
        width={'90%'}
        height={'100%'}
        fill={colorConstants.white}
      />
    ),
  },
];
