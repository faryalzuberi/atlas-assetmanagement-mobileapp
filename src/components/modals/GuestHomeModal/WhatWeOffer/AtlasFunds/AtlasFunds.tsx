import React from 'react';

import {languageTxt} from '../../../../../utils/languageTxt';
import {colorConstants} from '../../../../../utils/colorConstants';
import {TitleList} from '../../../../layouts/TitleList';
import {atlasFundsItems} from '../../../../Items/whatWeOfferItems';

import WhatWeOfferIcon from '../../../../../assets/icons/guest_screen/whatWeOffer.svg';

export const AtlasFunds = () => {
  return (
    <TitleList
      title={languageTxt.atlasFundsTxt}
      icon={
        <WhatWeOfferIcon
          width={'60'}
          height={'60'}
          fill={colorConstants.white}
        />
      }
      arrayList={atlasFundsItems}
      interval={1}
    />
  );
};
