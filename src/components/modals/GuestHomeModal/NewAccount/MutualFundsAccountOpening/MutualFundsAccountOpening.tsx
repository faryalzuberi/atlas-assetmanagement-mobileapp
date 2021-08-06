import React from 'react';
import { ScrollView } from 'react-native';
import {CustomCard} from '../../../../shared/CustomCard'
import { languageTxt } from '../../../../../utils/languageTxt';
import CreateAccount from '../../../../../assets/icons/new_account/createAccount.svg';
import { colorConstants } from '../../../../../utils/colorConstants';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { topTabNavigationItem } from './topTabNavigationItem';
import { styles } from './styles';
const Tab:any = createMaterialTopTabNavigator();

export const MutualFundsAccountOpening = () => {
    return(
        <ScrollView showsVerticalScrollIndicator={false}>
            <CustomCard type={languageTxt.header} title={languageTxt.accountOpeningForm} icon={
          <CreateAccount
            width={'40'}
            height={'40'}
            fill={colorConstants.white}
          />}/>
          <Tab.Navigator initialRouteName={languageTxt.OtpVerify} tabBarOptions={{
      labelStyle: styles.labelStyle,
      tabStyle: styles.tabStyle,
      scrollEnabled: true,
      activeTintColor: colorConstants.primary,
      inactiveTintColor: colorConstants.navInactiveTxt,
      style: styles.topTabStyle,
    }}>

        
        {topTabNavigationItem.map((listItemMeta, i) => (
          <Tab.Screen
            key={i}
            name={listItemMeta.name}
            component={listItemMeta.component}
           
            
          />
        ))}
    
       </Tab.Navigator>

        </ScrollView>
    )
}