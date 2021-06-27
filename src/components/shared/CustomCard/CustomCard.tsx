import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Card, Paragraph, Title} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

import {styles} from './styles';
import {colorConstants} from '../../../utils/colorConstants';

interface customCardProps {
  type: string;
  icon?: any;
  title: string;
  paragraph?: string;
  path?: string;
}
export const CustomCard = ({
  type,
  icon,
  title,
  paragraph,
  path,
}: customCardProps) => {
  const navigation = useNavigation();
  return (
    <>
      {type == 'dashboard' && (
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.cardContainer}
          onPress={path ? () => navigation.navigate(path) : () => {}}>
          <Card style={styles.card}>
            <Card.Content style={styles.cardContent}>
              {icon && icon}
              {title && <Title style={styles.dashboardTitle}>{title}</Title>}
            </Card.Content>
          </Card>
        </TouchableOpacity>
      )}

      {(type == 'carousel' || type == 'header') && (
        <LinearGradient
          colors={[colorConstants.primary, colorConstants.secondary]}
          style={styles.linearCard}>
          <Card style={[styles.card, styles.cardTransparent]}>
            {type == 'carousel' && (
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
            )}

            {type == 'header' && (
              <Card.Content style={styles.headerContent}>
                {icon}
                <View style={styles.carouselDescription}>
                  {title && <Title style={styles.headerTitle}>{title}</Title>}
                </View>
              </Card.Content>
            )}
          </Card>
        </LinearGradient>
      )}

      {type == 'detail' && (
        <Card style={styles.card}>
          <Card.Content>
            {title && <Title style={styles.detailTitle}>{title}</Title>}
            <View style={styles.titleLine}></View>
            {paragraph && (
              <Paragraph style={styles.detailParagraph}>{paragraph}</Paragraph>
            )}
          </Card.Content>
        </Card>
      )}
    </>
  );
};
