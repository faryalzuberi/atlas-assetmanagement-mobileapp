import React from 'react';
import {View} from 'react-native';

import {styles} from './styles';
import {DashboardList} from '../DashboardList';
import {IntroSilder} from '../../layouts/IntroSilder';
import {HeaderCardLayout} from '../CardLayout'
interface dashboardLayoutsContainerProps {
  arrayList: any;
  interval: number;
  sliderlist?: any;
  title?: string;
  icon?: any;
}

export const DashboardLayoutsContainer = ({
  arrayList,
  interval,
  sliderlist,
  title,
  icon,
}: dashboardLayoutsContainerProps) => {
  return (
    
    
    <View style={styles.bodyContainer}>
      <DashboardList
        arrayList={arrayList}
        interval={interval}
        header={
          <View style={styles.headerContainer}>
            {sliderlist ? (
              <IntroSilder arrayList={sliderlist} />
            ) : (
              <HeaderCardLayout
                title={title ? title : ''}
                icon={icon ? icon : <></>}
              />
            )}
          </View>
        }
      />
    </View>

  );
};
