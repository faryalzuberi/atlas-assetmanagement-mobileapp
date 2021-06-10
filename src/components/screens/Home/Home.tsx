import React from 'react';
import {ScrollView, View} from 'react-native';
import MenuCard from '../../shared/MenuCard/MenuCard';
import {styles} from './styles';

import HomeIcon from '../../../assets/Icons/BottomTabNavigator/home.svg';

const Home = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.bodyContainer}>
        <View style={styles.cardContainer}>
          <MenuCard
            label={'Login'}
            icon={<HomeIcon width={'40'} height={'40'} fill={'blue'} />}
          />
          <MenuCard
            label={'Login'}
            icon={<HomeIcon width={'40'} height={'40'} fill={'blue'} />}
          />
        </View>
        <View style={styles.cardContainer}>
          <MenuCard
            label={'Login'}
            icon={<HomeIcon width={'40'} height={'40'} fill={'blue'} />}
          />
          <MenuCard
            label={'Login'}
            icon={<HomeIcon width={'40'} height={'40'} fill={'blue'} />}
          />
        </View>
        <View style={styles.cardContainer}>
          <MenuCard
            label={'Login'}
            icon={<HomeIcon width={'40'} height={'40'} fill={'blue'} />}
          />
          <MenuCard
            label={'Login'}
            icon={<HomeIcon width={'40'} height={'40'} fill={'blue'} />}
          />
        </View>
      </View>
    </ScrollView>
  );
};
export default Home;
