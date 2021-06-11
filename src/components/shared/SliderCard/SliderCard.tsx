import React from 'react';
import {View} from 'react-native';
import {Card, Title, Paragraph} from 'react-native-paper';
import {styles} from './styles';
type CardProps = {
  title: string;
  paragraph: string;
  imageElement: any;
};
const SliderCard = ({title, paragraph, imageElement}: CardProps) => {
  return (
    <>
      <Card>
        <View style={styles.container}>
          <Card.Content>
            <Title>{title}</Title>
            <Paragraph>{paragraph}</Paragraph>
          </Card.Content>
          <View>{imageElement}</View>
        </View>
      </Card>
    </>
  );
};

export default SliderCard;
