import React from 'react';

import {languageTxt} from '../../../../../utils/languageTxt';
import {colorConstants} from '../../../../../utils/colorConstants';
import {TitleList} from '../../../../layouts/TitleList';
import {atlasMerajItems} from '../../../../Items/whatWeOfferItems';

import WhatWeOfferIcon from '../../../../../assets/icons/guest_screen/whatWeOffer.svg';

export const AtlasMeraj = () => {
  return (
    <TitleList
      title={languageTxt.atlasMerajTxt}
      icon={
        <WhatWeOfferIcon
          width={'60'}
          height={'60'}
          fill={colorConstants.white}
        />
      }
      arrayList={atlasMerajItems}
      interval={1}
    />
  );
};
