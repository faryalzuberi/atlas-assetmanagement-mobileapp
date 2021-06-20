import React from 'react';
import {View, ScrollView} from 'react-native';
import IconCard from '../../shared/IconCard'
import {styles} from './styles';
import MutualFundsIcon from '../../../assets/Icons/GuestScreen/MutualFunds.svg';
import { colorConstants } from '../../../utils/colorConstants';
export const ContactUs = () => {
  return (
    <ScrollView>
    <View style={styles.bodyContainer}>
      <IconCard title='Contact Us' imageElement={<MutualFundsIcon width={'100%'} height={'40'} fill={colorConstants.white} />}  />
    </View>
    </ScrollView>
  );
};
