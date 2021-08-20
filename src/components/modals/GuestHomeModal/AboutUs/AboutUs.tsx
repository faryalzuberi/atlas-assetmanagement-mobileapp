import React from 'react';

import {aboutUsItems} from '../../../Items/aboutUsItems';
import {languageTxt} from '../../../../utils/languageTxt';
import {colorConstants} from '../../../../utils/colorConstants';
import {DashboardLayoutsContainer} from '../../../layouts/DashboardLayoutsContainer';

import AboutUsIcon from '../../../../assets/icons/guest_screen/aboutUs.svg';

export const AboutUs = () => {
  return (
    <DashboardLayoutsContainer
      title={languageTxt.aboutUsTxt}
      icon={
        <AboutUsIcon width={'60'} height={'60'} fill={colorConstants.white} />
      }
      arrayList={aboutUsItems}
      interval={2}
    />
  );
};
