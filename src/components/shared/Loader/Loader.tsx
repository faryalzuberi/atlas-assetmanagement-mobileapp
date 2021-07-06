import React, {useContext} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {colorConstants} from '../../../utils/colorConstants';
import {styles} from './styles';

interface loaderProps {
  loader: Boolean;
}

export const Loader = ({loader}: loaderProps) => {
  return (
    <View style={loader ? styles.loading : styles.notLoading}>
      <ActivityIndicator size="large" color={colorConstants.primary} />
    </View>
  );
};
