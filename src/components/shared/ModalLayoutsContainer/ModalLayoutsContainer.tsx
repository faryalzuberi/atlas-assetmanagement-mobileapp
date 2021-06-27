import React from 'react';
import {ScrollView, View} from 'react-native';

import {styles} from './styles';
import {CustomCard} from '../CustomCard';
import {DashboardList} from '../DashboardList';
import {IntroSilder} from '../IntroSilder';

interface modalLayoutsContainerProps {
  title: string;
  icon: any;
  body: any;
}

export const ModalLayoutsContainer = ({
  title,
  icon,
  body,
}: modalLayoutsContainerProps) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.headerContainer}>
        <CustomCard
          type={'header'}
          title={title ? title : ''}
          icon={icon ? icon : <></>}
        />
      </View>
      <View style={styles.bodyContainer}>{body}</View>
    </ScrollView>
  );
};
