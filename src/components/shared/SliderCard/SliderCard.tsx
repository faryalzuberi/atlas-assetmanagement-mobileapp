import React from 'react';
import {View} from 'react-native';
import {Card, Title, Paragraph} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';
import {colorConstants} from '../../../utils/colorConstants';
type CardProps = {
  title: string;
  paragraph: string;
  imageElement: any;
};

export const SliderCard = ({title, paragraph, imageElement}: CardProps) => {
  return (
    <>
      <LinearGradient
        colors={[colorConstants.primary, colorConstants.secondary]}
        style={styles.cardContainer}>
        <View style={styles.cardContent}>
          <Card.Content>
            <Title style={{color: colorConstants.white}}>{title}</Title>
            <Paragraph style={{fontSize: 7, lineHeight: 12, textAlign: 'justify', color: colorConstants.white}}>
              {paragraph}
            </Paragraph>
          </Card.Content>
        </View>
        <View style={styles.cardImage}>
          {imageElement}
        </View>
      </LinearGradient>
    </>
  );
};
