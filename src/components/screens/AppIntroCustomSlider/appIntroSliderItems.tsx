import React from 'react';

import {languageTxt} from '../../../utils/languageTxt';

import AtlasFundsLogo from '../../../assets/icons/splash_screen/atlasFunds.svg';
import AtlasInvestment from '../../../assets/icons/splash_screen/atlasInvestment.svg';
import AtlasMeraj from '../../../assets/icons/splash_screen/atlasMeraj.svg';
import AtlasPension from '../../../assets/icons/splash_screen/atlasPension.svg';

const slides = [
  {
    key: 1,
    description: languageTxt.atlasFundsDescription,
    image: <AtlasFundsLogo width={'100%'} height={150} />,
  },
  {
    key: 2,
    description: languageTxt.atlasMirajDescription,
    image: <AtlasMeraj width={'100%'} height={150} />,
  },
  {
    key: 3,
    description: languageTxt.atlasPensionDescription,
    image: <AtlasPension width={'100%'} height={150} />,
  },
  {
    key: 4,
    description: languageTxt.atlasInvestmentDescription,
    image: <AtlasInvestment width={'100%'} height={150} />,
  },
];

export {slides};
