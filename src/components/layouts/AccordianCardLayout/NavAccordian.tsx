import React from 'react';
import { Button, Text } from 'react-native-paper';
import { styles } from './styles';
import { colorConstants } from '../../../utils/colorConstants';
import { languageTxt } from '../../../utils/languageTxt';
import { useNavigation } from '@react-navigation/native';
import {AccordianCard} from '../../shared/AccordianCard';
import { List } from 'react-native-paper';
import { View } from 'react-native';

interface CardProps {
    title: string;
    icon?: any;
    designation?: string;
    profile_image?: string;
    paragraph?: string;
    path?: string;
    subTitle?: string;
    subTitleDescription?: string;
    titleNumberOfLines?: number;
    description?: string
}

export const NavAccordian = ({
    icon,
    title,
    designation,
    profile_image,
    paragraph,
    titleNumberOfLines,
    path,
    subTitle,
    subTitleDescription,
    description
}: CardProps) => {
    const navigation = useNavigation();
    const [expanded, setExpanded] = React.useState(false);

    const handlePress = () => setExpanded(!expanded);

    return(
        <AccordianCard  body={
            <List.Accordion
              style={(expanded) ? styles.activeCard : styles.card}
              title={title}
              titleNumberOfLines={titleNumberOfLines? titleNumberOfLines: 1}
              description= {`Nav Applicable Date - ${description}`}
              titleStyle={{color: colorConstants.primary}}
              right={expanded ? () => (icon.negative) : () => (icon.positive)}
              expanded={expanded}
              onPress={handlePress}
            >
                  <View>
                  <Text>Nav</Text>
                  </View>
            </List.Accordion> 
        }/>
    )

}