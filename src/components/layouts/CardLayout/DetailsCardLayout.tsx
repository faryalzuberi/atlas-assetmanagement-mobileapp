import React from 'react';
import { Image, Text, View } from 'react-native';
import { Card, Paragraph, Title } from 'react-native-paper';
import { styles } from './styles';
import { Cards } from '../../shared/CustomCard';
interface detailCardProps {
  title: any;
  designation: string;
  paragraph: any;
  profile_image?: any
}

export const DetailsCardLayout = ({ title, designation, paragraph, profile_image }: detailCardProps) => {
  return (

    <Cards header={
      <Card.Content>
        {title && <Title style={styles.detailTitle}>{title}</Title>}
        {designation && (
          <Title style={styles.detailDesignation}>{designation}</Title>
        )}</Card.Content>} body={
          <Card.Content>
            <View style={styles.titleLine}></View>
            {paragraph && Array.isArray(paragraph) ? paragraph.map((item, i) => (
              <View style={styles.paragraphContainer} >
                <View style={styles.paragraphText1}>
                  <Text>{item?.name}</Text>
                </View>
                <View style={styles.paragraphText2} >
                  <Text >:</Text>
                </View>
                <View style={styles.paragraphText3} >
                  <Text>{item?.description ? item?.description : item?.designation}</Text>
                </View>
              </View>
            )) : (
                <Paragraph style={styles.detailParagraph}>
                 <View>
                {profile_image && (
                  <Image
                    style={styles.detailImage}
                    source={{
                      uri: profile_image,
                    }}
                  />
                )}
                </View>
                {paragraph}

              </Paragraph>
             
            )}
          </Card.Content>

        } />

  )
}
