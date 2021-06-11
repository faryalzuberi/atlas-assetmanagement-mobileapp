import React from 'react';
import {ScrollView, View} from 'react-native';
import MenuCard from '../../shared/MenuCard/MenuCard';
import {styles} from './styles';

import HomeIcon from '../../../assets/Icons/BottomTabNavigator/home.svg';
import SliderCard from './../../shared/SliderCard/index';

const Home = () => {
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
        <View style={styles.cardContainer}>
          <MenuCard
            label={'Login'}
            icon={<HomeIcon width={'40'} height={'40'} fill={'red'} />}
          />

          <MenuCard
            label={'Login'}
            icon={<HomeIcon width={'40'} height={'40'} fill={'blue'} />}
          />
        </View>

        <View style={styles.cardContainer}>
          <MenuCard
            label={'Login'}
            icon={<HomeIcon width={'40'} height={'40'} fill={'green'} />}
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
