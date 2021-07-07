import React from 'react';

import {languageTxt} from '../../../../../utils/languageTxt';
import {colorConstants} from '../../../../../utils/colorConstants';
import {TitleList} from '../../../../shared/TitleList';
import {atlasPensionsItems} from '../../../../Items/whatWeOfferItems';

import WhatWeOfferIcon from '../../../../../assets/icons/guest_screen/whatWeOffer.svg';

export const AtlasPensions = () => {
  return (
    <TitleList
      title={languageTxt.atlasPensionsTxt}
      icon={
        <WhatWeOfferIcon
          width={'60'}
          height={'60'}
          fill={colorConstants.white}
        />
      }
      arrayList={atlasPensionsItems}
      interval={1}
    />
  );
};
