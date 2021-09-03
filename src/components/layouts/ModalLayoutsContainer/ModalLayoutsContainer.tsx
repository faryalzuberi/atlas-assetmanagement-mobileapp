import React from 'react';
import {ScrollView, View} from 'react-native';

import {styles} from './styles';
import {HeaderCardLayout} from '../CardLayout/HeaderCardLayout';

interface modalLayoutsContainerProps {
  title: string;
  icon: any;
  body: any;
}

export const ModalLayoutsContainer = ({
  title,
  icon,
  body,
}: modalLayoutsContainerProps) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.headerContainer}>
        <HeaderCardLayout
          title={title ? title : ''}
          icon={icon ? icon : <></>}
        />
      </View>
      <View style={styles.bodyContainer}>{body}</View>
    </ScrollView>
  );
};
