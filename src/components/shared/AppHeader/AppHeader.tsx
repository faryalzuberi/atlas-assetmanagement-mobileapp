import React from 'react';
import {View} from 'react-native';
import {Appbar} from 'react-native-paper';

import {styles} from './styles';
import Logo from '../../../assets/icons/logo/logoHorizontal.svg';
import {colorConstants} from '../../../utils/colorConstants';

interface appHeaderProps {
  onButtonPressCb?: any;
  backButton?: boolean;
}

export const AppHeader = ({onButtonPressCb, backButton}: appHeaderProps) => {
  return (
    <Appbar.Header style={styles.header}>
      {backButton && (
        <Appbar.BackAction
          color={colorConstants.primary}
          onPress={onButtonPressCb}
        />
      )}
      <View style={styles.logo}>
        <Logo width="100%" height="40" />
      </View>
    </Appbar.Header>
  );
};
