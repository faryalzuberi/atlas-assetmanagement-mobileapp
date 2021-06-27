import React from 'react';

import {languageTxt} from '../../utils/languageTxt';
import {colorConstants} from '../../utils/colorConstants';

import AtlasFundIcon from '../../assets/icons/what_we_offer_screen/atlasFund.svg';
import AtlasMerajIcon from '../../assets/icons/what_we_offer_screen/atlasMeraj.svg';
import AtlasPensionIcon from '../../assets/icons/what_we_offer_screen/atlasPension.svg';
import InvestmentPlanIcon from '../../assets/icons/what_we_offer_screen/investmentPlan.svg';
import AllocationPlanIcon from '../../assets/icons/what_we_offer_screen/allocationPlan.svg';
import CapitalPreservationPlanIcon from '../../assets/icons/what_we_offer_screen/capitalPlan.svg';
import InvestmentAdvisoryServicesIcon from '../../assets/icons/what_we_offer_screen/investmentADvisoryService.svg';

export const whatWeOfferItems = [
  {
    title: languageTxt.atlasFundsTxt,
    icon: (
      <AtlasFundIcon width={'80'} height={'80'} fill={colorConstants.primary} />
    ),
    path: 'AtlasFunds',
  },
  {
    title: languageTxt.atlasMerajTxt,
    icon: (
      <AtlasMerajIcon
        width={'80'}
        height={'80'}
        fill={colorConstants.primary}
      />
    ),
    path: 'AtlasMeraj',
  },
  {
    title: languageTxt.atlasPensionsTxt,
    icon: (
      <AtlasPensionIcon
        width={'80'}
        height={'80'}
        fill={colorConstants.primary}
      />
    ),
    path: 'AtlasPensions',
  },
  {
    title: languageTxt.investmentPlansTxt,
    icon: (
      <InvestmentPlanIcon
        width={'80'}
        height={'80'}
        fill={colorConstants.primary}
      />
    ),
    path: 'InvestmentPlans',
  },
  {
    title: languageTxt.allocationPlansTxt,
    icon: (
      <AllocationPlanIcon
        width={'80'}
        height={'80'}
        fill={colorConstants.primary}
      />
    ),
    path: 'AllocationPlans',
  },
  {
    title: languageTxt.capitalPreservationPlanTxt,
    icon: (
      <CapitalPreservationPlanIcon
        width={'80'}
        height={'80'}
        fill={colorConstants.primary}
      />
    ),
    path: 'CapitalPreservationPlan',
  },
  {
    title: languageTxt.investmentAdvisoryServicesTxt,
    icon: (
      <InvestmentAdvisoryServicesIcon
        width={'80'}
        height={'80'}
        fill={colorConstants.primary}
      />
    ),
    path: 'InvestmentAdvisoryServices',
  },
];
