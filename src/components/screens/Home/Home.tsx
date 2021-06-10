import React from 'react';
import {ScrollView, View} from 'react-native';

import MenuCard from '../../shared/MenuCard/MenuCard';
import {languageTxt} from '../../../utils/languageTxt';
import {colorConstants} from '../../../utils/colorConstants';
import {styles} from './styles';

import LoginIcon from '../../../assets/Icons/GuestScreen/Login.svg';
import NewAccountIcon from '../../../assets/Icons/GuestScreen/NewAccount.svg';
import AboutUsIcon from '../../../assets/Icons/GuestScreen/AboutUs.svg';
import WhatWeOfferIcon from '../../../assets/Icons/GuestScreen/WhatWeOffer.svg';
import DownloadIcon from '../../../assets/Icons/GuestScreen/Download.svg';
import BranchLocaterIcon from '../../../assets/Icons/GuestScreen/BranchLocater.svg';
import InvestorEducationIcon from '../../../assets/Icons/GuestScreen/InvestorEducation.svg';
import MediaGalleryIcon from '../../../assets/Icons/GuestScreen/MediaGallery.svg';
import MutualFundsIcon from '../../../assets/Icons/GuestScreen/MutualFunds.svg';

const Home = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.bodyContainer}>
        <View style={styles.cardContainer}>
          <MenuCard
            label={languageTxt.Login}
            icon={
              <LoginIcon
                width={'70'}
                height={'70'}
                fill={colorConstants.primary}
              />
            }
          />
          <MenuCard
            label={languageTxt.NewAccount}
            icon={
              <NewAccountIcon
                width={'70'}
                height={'70'}
                fill={colorConstants.primary}
              />
            }
          />
        </View>
        <View style={styles.cardContainer}>
          <MenuCard
            label={languageTxt.AboutUs}
            icon={
              <AboutUsIcon
                width={'70'}
                height={'70'}
                fill={colorConstants.primary}
              />
            }
          />
          <MenuCard
            label={languageTxt.WhatWeOffer}
            icon={
              <WhatWeOfferIcon
                width={'70'}
                height={'70'}
                fill={colorConstants.primary}
              />
            }
          />
        </View>
        <View style={styles.cardContainer}>
          <MenuCard
            label={languageTxt.Download}
            icon={
              <DownloadIcon
                width={'70'}
                height={'70'}
                fill={colorConstants.primary}
              />
            }
          />
          <MenuCard
            label={languageTxt.BranchLocater}
            icon={
              <BranchLocaterIcon
                width={'70'}
                height={'70'}
                fill={colorConstants.primary}
              />
            }
          />
        </View>
        <View style={styles.cardContainer}>
          <MenuCard
            label={languageTxt.InvestorEducation}
            icon={
              <InvestorEducationIcon
                width={'70'}
                height={'70'}
                fill={colorConstants.primary}
              />
            }
          />
          <MenuCard
            label={languageTxt.MediaGallery}
            icon={
              <MediaGalleryIcon
                width={'70'}
                height={'70'}
                fill={colorConstants.primary}
              />
            }
          />
        </View>
      </View>
    </ScrollView>
  );
};
export default Home;
