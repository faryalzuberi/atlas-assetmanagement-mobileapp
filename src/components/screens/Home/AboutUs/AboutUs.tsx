import React from 'react';
import {  ScrollView, View } from 'react-native';

import { styles } from './styles'; 

import AboutUsIcon from '../../../../assets/icons/guest_screen/aboutUs.svg';
import { colorConstants } from '../../../../utils/colorConstants';
import { languageTxt } from '../../../../utils/languageTxt';
export const AboutUs = ({navigation}:any) => {
    return (
    <ScrollView showsVerticalScrollIndicator={false}>
    
        {/* <View style={styles.bodyContainer}> 
          {guestTabtems?.length &&
            guestTabtems.map((listItem, i) => (
              <View key={i} style={styles.cardContainer}>
                {listItem.subItem.map((sublistItem, j) => (
                  <MenuCard
                    key={j}
                    label={sublistItem.label}
                    icon={sublistItem.icon}
                    onButtonPressCb={()=>sublistItem.onButtonPressCb(navigation)}
                  />
                ))}
              </View>
            ))}
        </View> */}
      </ScrollView>);
  }
