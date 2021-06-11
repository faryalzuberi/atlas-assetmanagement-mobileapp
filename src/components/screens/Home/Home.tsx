import React from 'react';
import {ScrollView, View} from 'react-native';

import {MenuCard} from '../../shared/MenuCard/MenuCard';
import {guestTabtems} from './guestTabtems';
import {styles} from './styles';

export const Home = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
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
