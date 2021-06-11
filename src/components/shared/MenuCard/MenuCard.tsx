import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Card, Paragraph} from 'react-native-paper';
import {styles} from './styles';
interface menuCardProps {
  label: string;
  icon: any;
  onButtonPressCb: Function;
}
export const MenuCard = ({label, icon, onButtonPressCb}: menuCardProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.buttonClick}
      onPress={() => onButtonPressCb()}>
      <Card style={styles.card}>
        <Card.Content>
          <View style={styles.images}>{icon}</View>
          <Paragraph style={styles.paragraph}>{label}</Paragraph>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
};
