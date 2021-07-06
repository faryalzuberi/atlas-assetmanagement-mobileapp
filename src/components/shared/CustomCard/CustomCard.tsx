import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Card, Paragraph, Title} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

import {styles} from './styles';
import {colorConstants} from '../../../utils/colorConstants';
import {Image} from 'react-native';

interface customCardProps {
  type: string;
  title: string;
  icon?: any;
  designation?: string;
  profile_image?: string;
  paragraph?: string;
  path?: string;
}
export const CustomCard = ({
  type,
  icon,
  title,
  designation,
  profile_image,
  paragraph,
  path,
}: customCardProps) => {
  const navigation = useNavigation();
  return (
    <>
      {type == 'list' && (
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.cardContainer}
          onPress={path ? () => navigation.navigate(path) : () => {}}>
          <Card style={styles.card}>
            <Card.Content style={styles.cardContent}>
              {title && <Title style={styles.listTitle}>{title}</Title>}
            </Card.Content>
          </Card>
        </TouchableOpacity>
      )}

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
        </LinearGradient>
      )}

      {type == 'detail' && (
        <Card style={styles.card}>
          <Card.Content>
            {title && <Title style={styles.detailTitle}>{title}</Title>}
            {designation && (
              <Title style={styles.detailDesignation}>{designation}</Title>
            )}
            <View style={styles.titleLine}></View>
            {paragraph && (
              <Paragraph style={styles.detailParagraph}>
                {profile_image && (
                  <Image
                    style={styles.detailImage}
                    source={{
                      uri: profile_image,
                    }}
                  />
                )}
                {paragraph}
              </Paragraph>
            )}
          </Card.Content>
        </Card>
      )}
    </>
  );
};
