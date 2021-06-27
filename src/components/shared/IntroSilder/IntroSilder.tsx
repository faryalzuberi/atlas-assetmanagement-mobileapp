import React from 'react';
import {View} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

import {styles} from './styles';
import {CustomCard} from '../CustomCard';

interface IntroSilderProps {
  arrayList: any;
}

const renderItem = ({item}: any) => {
  return (
    <CustomCard
      type={'carousel'}
      title={item.title}
      paragraph={item.paragraph}
      icon={item.icon}
    />
  );
};

const renderPage = (activeIndex: any) => {
  return (
    <View style={styles.sliderPagination}>
      <View style={[styles.item, activeIndex == 0 && styles.itemColor]} />
      <View style={[styles.item, activeIndex == 1 && styles.itemColor]} />
    </View>
  );
};

export const IntroSilder = ({arrayList}: IntroSilderProps) => {
  return (
    <AppIntroSlider
      renderItem={renderItem}
      data={arrayList}
      renderPagination={renderPage}
    />
  );
};
