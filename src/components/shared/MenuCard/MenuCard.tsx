import React from 'react';
import {View} from 'react-native';
import {Card, Title, Paragraph} from 'react-native-paper';
import {styles} from './styles';

export default function MenuCard({label, icon}: any) {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <View style={styles.images}>{icon}</View>
        <Paragraph style={styles.paragraph}>{label}</Paragraph>
      </Card.Content>
    </Card>
  );
}
