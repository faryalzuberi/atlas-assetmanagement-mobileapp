import React from 'react';
import { Card } from 'react-native-paper';
import { styles } from './styles';


interface cardProps {
   header?: JSX.Element;
   body:JSX.Element;
   footer?: JSX.Element;
   expnaded?: boolean;
  }

export const Cards = ({header, body, footer,  expnaded}: cardProps) =>{
    return(
        <Card style={ expnaded === true ? styles.active : styles.card}>
            {header}
            {body}
            {footer}
        </Card>
    )
}