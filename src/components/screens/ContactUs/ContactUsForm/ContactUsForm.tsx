import React from 'react';
import {View, ScrollView, TouchableOpacity} from 'react-native';

import {styles} from './styles';
import AppTextInput from '../../../shared/AppTextInput';
import SingleBtn from '../../../shared/SingleBtn';
import {colorConstants} from '../../../../utils/colorConstants';
import IconBtn from '../../../shared/IconBtn';

import Returns from '../../../../assets/icons/guest_navigation/returns.svg';

import {ModalLayoutsContainer} from '../../../layouts/ModalLayoutsContainer';
import {languageTxt} from '../../../../utils/languageTxt';
import ContactUsIcon from '../../../../assets/icons/guest_navigation/contactUs.svg';

export const ContactUsForm = () => {
  return (
    <ModalLayoutsContainer
      title={languageTxt.contactusTxt}
      icon={
        <ContactUsIcon width={'40'} height={'40'} fill={colorConstants.white} />
      }
      body={
        <View style={styles.bodyContainer}>
          <View style={styles.textInputContainer}>
            <AppTextInput
              placeholder="Your Name"
              height={45}
              multipleLine={false}
            />
            <AppTextInput
              placeholder="Your Mobile Number"
              height={45}
              multipleLine={false}
            />
            <AppTextInput
              placeholder="Your Email Address"
              height={45}
              multipleLine={false}
            />
            <AppTextInput
              placeholder="Subject"
              height={45}
              multipleLine={false}
            />
            <AppTextInput
              placeholder="Message"
              height={150}
              multipleLine={true}
            />
            <SingleBtn text="Submit" width='45%' />
            <View style={styles.iconBtn}>
              <IconBtn
                height={30}
                icon={
                  <Returns
                    width={'100%'}
                    height={'20'}
                    fill={colorConstants.white}
                  />
                }
              />
              <IconBtn
                height={30}
                icon={
                  <Returns
                    width={'100%'}
                    height={'20'}
                    fill={colorConstants.white}
                  />
                }
              />
              <IconBtn
                height={30}
                icon={
                  <Returns
                    width={'100%'}
                    height={'20'}
                    fill={colorConstants.white}
                  />
                }
              />
            </View>
          </View>
        </View>
      }
    />
  );
};
