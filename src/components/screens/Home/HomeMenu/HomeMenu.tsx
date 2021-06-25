import React from 'react';
import {ScrollView, View} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {SafeAreaView} from 'react-native-safe-area-context';

import {styles} from './styles';
import {guestTabtems} from './guestTabtems';
import {sliderCardItems} from './sliderCardItems';
import {MenuCard} from '../../../shared/MenuCard/MenuCard';
import {SliderCard} from '../../../shared/SliderCard/index';

const renderItem = ({item}: any) => {
  return (
    <SliderCard
      title={item.title}
      paragraph={item.paragraph}
      imageElement={item.imageElement}
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

export const HomeMenu = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.bodyContainer}>
        <AppIntroSlider
          renderItem={renderItem}
          data={sliderCardItems}
          bottomButton={false}
          renderPagination={renderPage}
        />
        {guestTabtems?.length &&
          guestTabtems.map((listItem, i) => (
            <View key={i} style={styles.cardContainer}>
              {listItem.subItem.map((sublistItem, j) => (
                <MenuCard
                  key={j}
                  label={sublistItem.label}
                  icon={sublistItem.icon}
                  onButtonPressCb={sublistItem.onButtonPressCb}
                />
              ))}
            </View>
          ))}
      </View>
    </ScrollView>
  );
};
