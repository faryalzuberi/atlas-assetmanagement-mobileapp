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
    paragraph?: string;
    path?: string;
    subTitle?: string;
    subTitleDescription?: string;
    titleNumberOfLines?: number
}

export const NewAccountAcordian = ({
    icon,
    title,
    paragraph,
    path,
    subTitle,
    subTitleDescription,
    titleNumberOfLines
}: CardProps) => {
    const navigation = useNavigation();
    const [expanded, setExpanded] = React.useState(false);

    const handlePress = () => setExpanded(!expanded);

    return(
        <AccordianCard  body={
       
            <List.Section >
            <List.Accordion
              style={(expanded) ? styles.activeCard : styles.card}
              title={title}
              titleNumberOfLines={titleNumberOfLines ? titleNumberOfLines : 1}
              titleStyle={{color: colorConstants.primary}}
              right={expanded ? () => (icon.negative) : () => (icon.positive)}
              expanded={expanded}
              onPress={handlePress}
            >
                  <View>
                  <List.Item style={styles.accordianContainer} title={paragraph} titleStyle={styles.accordianTitleStyle1} titleNumberOfLines={5} />
                  <List.Item style={styles.accordianContainer} title={subTitle} titleStyle={styles.accordianTitleStyle2} description={subTitleDescription} descriptionStyle={styles.accordianDescriptionStyle} descriptionNumberOfLines={10} />
                  <List.Item title='' style={styles.accordianContainer2} right={() => (<Button color={colorConstants.red} style={styles.accordianButtonStyle} labelStyle={styles.accordianButtonLabelStyle} mode={languageTxt.contained} onPress={path ? () => navigation.navigate(path) : () => { }} >Click Here</Button>)} />
                  </View>
            </List.Accordion>
          </List.Section>
        }/>
    )

}