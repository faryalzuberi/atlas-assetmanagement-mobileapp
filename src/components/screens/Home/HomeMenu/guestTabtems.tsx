import React from 'react';

import {languageTxt} from '../../../../utils/languageTxt';
import {colorConstants} from '../../../../utils/colorConstants';

import LoginIcon from '../../../../assets/icons/guest_screen/login.svg';
import NewAccountIcon from '../../../../assets/icons/guest_screen/newAccount.svg';
import AboutUsIcon from '../../../../assets/icons/guest_screen/aboutUs.svg';
import WhatWeOfferIcon from '../../../../assets/icons/guest_screen/whatWeOffer.svg';
import DownloadIcon from '../../../../assets/icons/guest_screen/download.svg';
import BranchLocaterIcon from '../../../../assets/icons/guest_screen/branchLocater.svg';
import InvestorEducationIcon from '../../../../assets/icons/guest_screen/investorEducation.svg';
import MediaGalleryIcon from '../../../../assets/icons/guest_screen/mediaGallery.svg';

export const guestTabtems = [
  {
    subItem: [
      {
        label: languageTxt.loginTxt,
        icon: (
          <LoginIcon width={'70'} height={'70'} fill={colorConstants.primary} />
        ),
        onButtonPressCb: () => {},
      },
      {
        label: languageTxt.newAccountTxt,
        icon: (
          <NewAccountIcon
            width={'70'}
            height={'70'}
            fill={colorConstants.primary}
          />
        ),
        onButtonPressCb: () => {},
      },
    ],
  },
  {
    subItem: [
      {
        label: languageTxt.aboutUsTxt,
        icon: (
          <AboutUsIcon
            width={'70'}
            height={'70'}
            fill={colorConstants.primary}
          />
        ),
        onButtonPressCb: () => {},
      },
      {
        label: languageTxt.whatWeOfferTxt,
        icon: (
          <WhatWeOfferIcon
            width={'70'}
            height={'70'}
            fill={colorConstants.primary}
          />
        ),
        onButtonPressCb: () => {},
      },
    ],
  },
  {
    subItem: [
      {
        label: languageTxt.downloadTxt,
        icon: (
          <DownloadIcon
            width={'70'}
            height={'70'}
            fill={colorConstants.primary}
          />
        ),
        onButtonPressCb: () => {},
      },
      {
        label: languageTxt.branchLocaterTxt,
        icon: (
          <BranchLocaterIcon
            width={'70'}
            height={'70'}
            fill={colorConstants.primary}
          />
        ),
        onButtonPressCb: () => {},
      },
    ],
  },
  {
    subItem: [
      {
        label: languageTxt.investorEducationTxt,
        icon: (
          <InvestorEducationIcon
            width={'70'}
            height={'70'}
            fill={colorConstants.primary}
          />
        ),
        onButtonPressCb: () => {},
      },
      {
        label: languageTxt.mediaGalleryTxt,
        icon: (
          <MediaGalleryIcon
            width={'70'}
            height={'70'}
            fill={colorConstants.primary}
          />
        ),
        onButtonPressCb: () => {},
      },
    ],
  },
];
