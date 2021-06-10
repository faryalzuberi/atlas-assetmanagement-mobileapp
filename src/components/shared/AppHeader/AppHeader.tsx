import React from 'react';
import {View} from 'react-native';
import {Appbar} from 'react-native-paper';
import {styles} from './styles';
import HomeIcon from '../../../assets/Icons/BottomTabNavigator/home.svg';

const AppHeader = () => {
  return (
    <Appbar.Header style={styles.header}>
      <View style={styles.logo}>
        <HomeIcon width="200" height="40" />
      </View>
    </Appbar.Header>
  );
};
export default AppHeader;
