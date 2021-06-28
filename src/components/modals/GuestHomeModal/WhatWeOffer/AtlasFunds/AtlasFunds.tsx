import React from 'react';
import {atlasFundsItems} from '../../../../Items/atlasFundsItems';
import {languageTxt} from '../../../../../utils/languageTxt';
import {colorConstants} from '../../../../../utils/colorConstants';
import {DashboardLayoutsContainer} from '../../../../shared/DashboardLayoutsContainer';
import AtlasFund from '../../../../../assets/icons/what_we_offer_screen/atlasFund.svg';
export const AtlasFunds = () =>{
    return(
        <>
        <DashboardLayoutsContainer
      title={languageTxt.atlasFundsTxt}
      icon={
        <AtlasFund
          width={'60'}
          height={'60'}
          fill={colorConstants.white}
        />
      }
      arrayList={atlasFundsItems}
      interval={1}
    />
        </>
    )
}