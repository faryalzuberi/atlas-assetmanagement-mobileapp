import React from 'react';
import {View} from 'react-native';
import {Card, Title, Paragraph} from 'react-native-paper';
import {styles} from './styles';
type CardProps = {
  title: string;
  paragraph: string;
  imageElement: any;
};
export const SliderCard = ({title, paragraph, imageElement}: CardProps) => {
  return (
    <>
      <Card>
        <View style={styles.cardContainer}>
          <View style={styles.cardContent}>
            <Card.Content>
              <Title>{title}</Title>
              <Paragraph>{paragraph}</Paragraph>
            </Card.Content>
          </View>
          <View style={styles.cardImage}>{imageElement}</View>
        </View>
      </Card>
    </>
  );
};
