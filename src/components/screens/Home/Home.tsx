import React from 'react';
import {ScrollView, View} from 'react-native';
import {StyleSheet} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {MenuCard} from '../../shared/MenuCard/MenuCard';
import {SliderCard} from './../../shared/SliderCard/index';
import {guestTabtems} from './guestTabtems';
import {styles} from './styles';
import {sliderCardItems} from './sliderCardItems';
import {colorConstants} from './../../../utils/colorConstants';

export const Home = () => {
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
        <View style={sliderStyles(activeIndex).sliderPagination1} />
        <View style={sliderStyles(activeIndex).sliderPagination2} />
      </View>
    );
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.bodyContainer}>
        <View style={styles.sliderContainer}>
          <AppIntroSlider
            renderItem={renderItem}
            data={sliderCardItems}
            bottomButton={false}
            renderPagination={renderPage}
          />
        </View>
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

const sliderStyles = (props: any) =>
  StyleSheet.create({
    sliderPagination1: {
      width: 30,
      height: 7,
      borderRadius: 8,
      backgroundColor: props === 0 ? colorConstants.primary : 'white',
      marginRight: 5,
    },
    sliderPagination2: {
      width: 30,
      height: 7,
      borderRadius: 8,
      backgroundColor: props === 1 ? colorConstants.primary : 'white',
    },
  });
