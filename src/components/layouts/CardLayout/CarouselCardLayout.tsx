import React from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Card, Paragraph, Title } from 'react-native-paper';
import { colorConstants } from '../../../utils/colorConstants';
import { styles } from './styles';
import { Cards } from '../../shared/CustomCard';
interface headerCardProps {
    icon?: any;
    paragraph: string;
    title: string
}

export const CarouselCardLayout = ({ icon, title, paragraph }: headerCardProps) => {
    
    return (
        <Cards body={
            <LinearGradient
            colors={[colorConstants.primary, colorConstants.secondary]}
            style={styles.linearCard}>
              <Card.Content style={styles.carouselContent}>
                <View style={styles.carouselDescription}>
                  {title && <Title style={styles.carouselTitle}>{title}</Title>}
                  {paragraph && (
                    <Paragraph style={styles.carouselParagraph}>
                      {paragraph}
                    </Paragraph>
                  )}
                </View>
                <View style={styles.carouselIcon}>{icon}</View>
              </Card.Content>         
          </LinearGradient>
        } />

    )
}