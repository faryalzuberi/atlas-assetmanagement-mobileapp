import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Card, Title } from 'react-native-paper';
import { styles } from './styles';
import { Cards } from '../../shared/CustomCard';
import { useNavigation } from '@react-navigation/native';
interface headerCardProps {
    path: string;
    title: string
}

export const ListCardLayout = ({  title, path }: headerCardProps) => {
    const navigation = useNavigation();
    return (
        <Cards body={
            <TouchableOpacity
          activeOpacity={0.9}
          style={styles.cardContainer}
           onPress={path ? () => navigation.navigate(path) : () => { }}>
          <Card style={styles.card}>
            <Card.Content style={styles.cardContent}>
              {title && <Title style={styles.listTitle}>{title}</Title>}
            </Card.Content>
          </Card>
        </TouchableOpacity>
        } />

    )
}