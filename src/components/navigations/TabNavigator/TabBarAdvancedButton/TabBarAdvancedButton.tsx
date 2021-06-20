import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {BottomTabBarButtonProps} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import LinearGradient from 'react-native-linear-gradient';

import {styles} from './styles';
import {TabBg} from '../svg';
import {colorConstants} from '../../../../utils/colorConstants';
import Home from '../../../../assets/Icons/GuestNavigation/Home.svg';

type Props = BottomTabBarButtonProps & {
  bgColor?: string;
};

export const TabBarAdvancedButton: React.FC<Props> = ({bgColor, ...props}) => (
  <View style={styles.container} pointerEvents="box-none">
    <TabBg color={bgColor} style={styles.background} />
    <TouchableOpacity onPress={props.onPress}>
      <LinearGradient
        colors={[colorConstants.primary, colorConstants.secondary]}
        style={styles.button}>
        <Home width={'100%'} height={'35'}  />
      </LinearGradient>
    </TouchableOpacity>
  </View>
);
