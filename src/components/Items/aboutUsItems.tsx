import React from 'react';

import {languageTxt} from '../../utils/languageTxt';
import {colorConstants} from '../../utils/colorConstants';

import VisionMissionIcon from '../../assets/icons/about_us_screen/vision.svg';
import IntroductionIcon from '../../assets/icons/about_us_screen/introduction.svg';
import BoardOfDirectorsIcon from '../../assets/icons/about_us_screen/boardOfDirectors.svg';
import ManagementTeamIcon from '../../assets/icons/about_us_screen/managementTeam.svg';

export const aboutUsItems = [
  {
    title: languageTxt.visionMissionTxt,
    icon: (
      <VisionMissionIcon
        width={'80'}
        height={'80'}
        fill={colorConstants.primary}
      />
    ),
    path: 'VisionMission',
  },
  {
    title: languageTxt.introductionTxt,
    icon: (
      <IntroductionIcon
        width={'80'}
        height={'80'}
        fill={colorConstants.primary}
      />
    ),
    path: 'Introduction',
  },
  {
    title: languageTxt.boardOfDirectorsTxt,
    icon: (
      <BoardOfDirectorsIcon
        width={'80'}
        height={'80'}
        fill={colorConstants.primary}
      />
    ),
    path: 'BoardOfDirectors',
  },
  {
    title: languageTxt.managementTeamTxt,
    icon: (
      <ManagementTeamIcon
        width={'80'}
        height={'80'}
        fill={colorConstants.primary}
      />
    ),
    path: 'ManagementTeam',
  },
];
