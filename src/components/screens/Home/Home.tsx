import React from 'react';
import {ScrollView, View} from 'react-native';

import {MenuCard} from '../../shared/MenuCard/MenuCard';
import SliderCard from './../../shared/SliderCard/index';
import {guestTabtems} from './guestTabtems';
import {styles} from './styles';

export const Home = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{flex: 1, marginBottom: 50}}>
      <View style={styles.bodyContainer}>
        <SliderCard
          title="My Title"
          paragraph="My Paragraph"
          imageElement={<HomeIcon width={'40'} height={'40'} fill={'red'} />}
        />
      </View>
      <View style={styles.bodyContainer}>
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
