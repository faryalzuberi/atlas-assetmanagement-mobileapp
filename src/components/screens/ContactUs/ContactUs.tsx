import React from 'react';
import {View, ScrollView, TouchableOpacity} from 'react-native';
import IconCard from '../../shared/IconCard'
import {styles} from './styles';
import MutualFundsIcon from '../../../assets/icons/guest_screen/mutualFunds.svg';
import {colorConstants} from '../../../utils/colorConstants';
import AppTextInput from '../../shared/AppTextInput';
import SingleBtn from '../../shared/SingleBtn';
import IconBtn from '../../shared/IconBtn';
import Returns from '../../../assets/icons/guest_navigation/returns.svg';

export const ContactUs = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.bodyContainer}>
      <IconCard title='Contact Us' imageElement={<MutualFundsIcon width={'100%'} height={'40'} fill={colorConstants.white} />}  />
      <View style={styles.textInputContainer}>
      <AppTextInput placeholder='Your Name' height={45} multipleLine={false}/>
      <AppTextInput placeholder='Your Mobile Number' height={45} multipleLine={false}/>
      <AppTextInput placeholder='Your Email Address' height={45} multipleLine={false}/>
      <AppTextInput placeholder='Subject' height={45} multipleLine={false}/>
      <AppTextInput placeholder='Message' height={150} multipleLine={true}/>
      <SingleBtn text='Submit' height={40}/>
      <View style={styles.iconBtn}>
        <IconBtn height={30} icon={<Returns width={'100%'} height={'20'} fill={colorConstants.white} />}/>
        <IconBtn height={30} icon={<Returns width={'100%'} height={'20'} fill={colorConstants.white}/>} />
        <IconBtn height={30} icon={<Returns width={'100%'} height={'20'} fill={colorConstants.white} />} />
      </View>
      </View>
      </View>
    </ScrollView>
    
  );
};
