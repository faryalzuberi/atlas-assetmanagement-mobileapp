import React from 'react';
import {languageTxt} from '../../utils/languageTxt';
import {colorConstants} from '../../utils/colorConstants';
import Positive from '../../assets/icons/new_account/positive.svg'
import Negative from '../../assets/icons/new_account/negative.svg'
 const NewAccountItem = [
    {
      title: languageTxt.onlineMutualFundsAccount,
      icon: {
        positive: (
          <Positive
            width={'15'}
            height={'15'}
            fill={colorConstants.primary}
          />
        ),
        negative: (
          <Negative
            width={'15'}
            height={'15'}
            fill={colorConstants.primary}
          />
        ),
      },
      description: languageTxt.onlineMutualFundsAccountDescription,
      subTitle: languageTxt.onlineMutualFundsAccountSubTitle,
      subTitleDescription: languageTxt.onlineMutualFundsAccountSubTitleDescription,
      path: languageTxt.onlineMutualFundsAccountPath,
      type: languageTxt.onlineMutualFundsAccountType,
    },
    {
      title: languageTxt.onlineSahulatSarmayakariAccount,
      icon: {
        positive: (
          <Positive
            width={'15'}
            height={'15'}
            fill={colorConstants.primary}
          />
        ),
        negative: (
          <Negative
            width={'15'}
            height={'15'}
            fill={colorConstants.primary}
          />
        ),
      },
      description: languageTxt.onlineSahulatSarmayakariAccountDescription,
      subTitle: languageTxt.onlineSahulatSarmayakariAccountSubTitle,
      subTitleDescription: languageTxt.onlineSahulatSarmayakariAccountSubTitleDescription,
      path: languageTxt.onlineSahulatSarmayakariAccountpath,
      type: languageTxt.onlineSahulatSarmayakariAccountType,
      titleNumberOfLines: 2,
    },
    {
        title: languageTxt.onlineRoshanDigitalAccount,
        icon: {
          positive: (
            <Positive
              width={'15'}
              height={'15'}
              fill={colorConstants.primary}
            />
          ),
          negative: (
            <Negative
              width={'15'}
              height={'15'}
              fill={colorConstants.primary}
            />
          ),
        },
        description: 'Not Available Right Now!',
        type: 'accordian'
      },
]

export {
    NewAccountItem
}