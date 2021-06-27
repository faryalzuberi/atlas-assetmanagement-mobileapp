import React from 'react';

import {languageTxt} from '../../utils/languageTxt';
import {colorConstants} from '../../utils/colorConstants';

import LoginIcon from '../../assets/icons/guest_screen/login.svg';
import NewAccountIcon from '../../assets/icons/guest_screen/newAccount.svg';
import AboutUsIcon from '../../assets/icons/guest_screen/aboutUs.svg';
import WhatWeOfferIcon from '../../assets/icons/guest_screen/whatWeOffer.svg';
import DownloadIcon from '../../assets/icons/guest_screen/download.svg';
import BranchLocaterIcon from '../../assets/icons/guest_screen/branchLocater.svg';
import InvestorEducationIcon from '../../assets/icons/guest_screen/investorEducation.svg';
import MediaGalleryIcon from '../../assets/icons/guest_screen/mediaGallery.svg';

export const guestItems = [
  {
    title: languageTxt.loginTxt,
    icon: (
      <LoginIcon width={'80'} height={'80'} fill={colorConstants.primary} />
    ),
    path: 'Login',
  },
  {
    title: languageTxt.newAccountTxt,
    icon: (
      <NewAccountIcon
        width={'80'}
        height={'80'}
        fill={colorConstants.primary}
      />
    ),
    path: 'NewAccount',
  },
  {
    title: languageTxt.aboutUsTxt,
    icon: (
      <AboutUsIcon width={'80'} height={'80'} fill={colorConstants.primary} />
    ),
    path: 'AboutUs',
  },
  {
    title: languageTxt.whatWeOfferTxt,
    icon: (
      <WhatWeOfferIcon
        width={'80'}
        height={'80'}
        fill={colorConstants.primary}
      />
    ),
    path: 'WhatWeOffer',
  },
  {
    title: languageTxt.downloadTxt,
    icon: (
      <DownloadIcon width={'80'} height={'80'} fill={colorConstants.primary} />
    ),
    path: 'Download',
  },
  {
    title: languageTxt.branchLocaterTxt,
    icon: (
      <BranchLocaterIcon
        width={'80'}
        height={'80'}
        fill={colorConstants.primary}
      />
    ),
    path: 'BranchLocater',
  },
  {
    title: languageTxt.investorEducationTxt,
    icon: (
      <InvestorEducationIcon
        width={'80'}
        height={'80'}
        fill={colorConstants.primary}
      />
    ),
    path: 'InvestorEducation',
  },
  {
    title: languageTxt.mediaGalleryTxt,
    icon: (
      <MediaGalleryIcon
        width={'80'}
        height={'80'}
        fill={colorConstants.primary}
      />
    ),
    path: 'MediaGallery',
  },
];
