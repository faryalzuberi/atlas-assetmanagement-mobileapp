import React from 'react';

import {languageTxt} from '../../../utils/languageTxt';
import {colorConstants} from '../../../utils/colorConstants';

import LoginIcon from '../../../assets/Icons/GuestScreen/Login.svg';
import NewAccountIcon from '../../../assets/Icons/GuestScreen/NewAccount.svg';
import AboutUsIcon from '../../../assets/Icons/GuestScreen/AboutUs.svg';
import WhatWeOfferIcon from '../../../assets/Icons/GuestScreen/WhatWeOffer.svg';
import DownloadIcon from '../../../assets/Icons/GuestScreen/Download.svg';
import BranchLocaterIcon from '../../../assets/Icons/GuestScreen/BranchLocater.svg';
import InvestorEducationIcon from '../../../assets/Icons/GuestScreen/InvestorEducation.svg';
import MediaGalleryIcon from '../../../assets/Icons/GuestScreen/MediaGallery.svg';
import MutualFundsIcon from '../../../assets/Icons/GuestScreen/MutualFunds.svg';

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
