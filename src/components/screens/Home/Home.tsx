import React from 'react';
import {ScrollView, View} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {MenuCard} from '../../shared/MenuCard/MenuCard';
import {SliderCard} from './../../shared/SliderCard/index';
import {guestTabtems} from './guestTabtems';
import {styles} from './styles';
import {sliderCardItems} from './sliderCardItems';
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
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.bodyContainer}>
        <View style={styles.sliderContainer}>
          <AppIntroSlider
            renderItem={renderItem}
            data={sliderCardItems}
            bottomButton={false}
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
