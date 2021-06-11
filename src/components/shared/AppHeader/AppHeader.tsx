import React from 'react';
import {View} from 'react-native';
import {Appbar} from 'react-native-paper';

import {styles} from './styles';
import Logo from '../../../assets/Icons/Logo/AtlasLogoHorizontal.svg';

export const AppHeader = () => {
  return (
    <Appbar.Header style={styles.header}>
      <View style={styles.logo}>
        <Logo width="100%" height="42" />
      </View>
    </Appbar.Header>
  );
};
