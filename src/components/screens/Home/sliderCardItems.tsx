import React from 'react';
import MutualFundsIcon from '../../../assets/Icons/GuestScreen/MutualFunds.svg';
import {colorConstants} from './../../../utils/colorConstants';
import {languageTxt} from './../../../utils/languageTxt';

export const sliderCardItems = [
  {
    key: 1,
    title: languageTxt.homeCardtitle,
    paragraph: languageTxt.homeCarddescription,
    imageElement: (
      <MutualFundsIcon
        width={'150'}
        height={'100'}
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
        width={'150'}
        height={'100'}
        fill={colorConstants.white}
      />
    ),
  },
];
