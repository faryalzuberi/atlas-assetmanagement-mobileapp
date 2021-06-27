import React from 'react';
import {View} from 'react-native';

import {styles} from './styles';
import {CustomCard} from '../CustomCard';
import {DashboardList} from '../DashboardList';
import {IntroSilder} from '../IntroSilder';

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
              <CustomCard
                type={'header'}
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
