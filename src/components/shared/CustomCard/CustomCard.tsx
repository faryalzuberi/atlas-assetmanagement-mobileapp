import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Card, Paragraph, Title } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { List } from 'react-native-paper';
import { Button } from 'react-native-paper';
import { styles } from './styles';
import { colorConstants } from '../../../utils/colorConstants';
import { Image } from 'react-native';
import { languageTxt } from '../../../utils/languageTxt';

interface customCardProps {
  type: string;
  title: string;
  icon?: any;
  designation?: string;
  profile_image?: string;
  paragraph?: string;
  path?: string;
  subTitle?: string;
  subTitleDescription?: string;
  titleNumberOfLines?: number;
  subType?: string;
  description?:string
}
export const CustomCard = ({
  type,
  icon,
  title,
  designation,
  profile_image,
  paragraph,
  titleNumberOfLines,
  path,
  subTitle,
  subType,
  subTitleDescription,
  description
}: customCardProps) => {
  const navigation = useNavigation();
  const [expanded, setExpanded] = React.useState(false);

  const handlePress = () => setExpanded(!expanded);
  return (
    <>
     
        
        {type == 'accordian' && (
        <TouchableOpacity
          activeOpacity={0.9}
          >
          <List.Section >
            <List.Accordion
              style={(expanded) ? styles.activeCard : styles.card}
              title={title}
              titleNumberOfLines={titleNumberOfLines? titleNumberOfLines: 1}
             // description={description ? description: '' }
              titleStyle={{color: colorConstants.primary}}
              right={expanded ? () => (icon.negative) : () => (icon.positive)}
              expanded={expanded}
              onPress={handlePress}
            >
              {
                (subType == 'documentsAccordian') ? (<View>

                  <List.Item title='' style={styles.accordianContainer2} right={() => (<Button color={colorConstants.red} style={styles.accordianButtonStyle} labelStyle={styles.accordianButtonLabelStyle} mode={languageTxt.contained} onPress={path ? () => navigation.navigate(path) : () => { }} >Upload New File</Button>)} />
                </View>) : (subType == languageTxt.navAccordianTxt) ? (<Text>text</Text>) : (
                  <View>
                  <List.Item style={styles.accordianContainer} title={paragraph} titleStyle={styles.accordianTitleStyle1} titleNumberOfLines={5} />
                  <List.Item style={styles.accordianContainer} title={subTitle} titleStyle={styles.accordianTitleStyle2} description={subTitleDescription} descriptionStyle={styles.accordianDescriptionStyle} descriptionNumberOfLines={10} />
                  <List.Item title='' style={styles.accordianContainer2} right={() => (<Button color={colorConstants.red} style={styles.accordianButtonStyle} labelStyle={styles.accordianButtonLabelStyle} mode={languageTxt.contained} onPress={path ? () => navigation.navigate(path) : () => { }} >Click Here</Button>)} />
                  </View>
                )
              }
             
            </List.Accordion>
          </List.Section>
          
        </TouchableOpacity>
      )
      }


    

     
    </>
  );
};
