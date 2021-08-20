import React from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Card, Title } from 'react-native-paper';
import { colorConstants } from '../../../utils/colorConstants';
import { styles } from './styles';
import { Cards } from '../../shared/CustomCard';
interface headerCardProps {
    icon: any;
    title: string
}

export const HeaderCardLayout = ({icon,title}:headerCardProps) => {
    return(
        <Cards body={
            <LinearGradient colors={[colorConstants.primary, colorConstants.secondary]}
            style={styles.linearCard}>
            <Card.Content style={styles.headerContent}>
                <View style={styles.icon}>
                  {icon}
                  </View>
                  <View style={styles.carouselDescription}>
                    {title && <Title style={styles.headerTitle}>{title}</Title>}
                  </View>
                </Card.Content>
            </LinearGradient>
        }  />
       
    )
}