import React from 'react';
import { Card } from 'react-native-paper';
import { styles } from './styles';


interface cardProps {
   header?: JSX.Element;
   body:JSX.Element;
   footer?: JSX.Element;
  
  }

export const Cards = ({header, body, footer}: cardProps) =>{
    return(
        <Card style={ styles.card}>
            {header}
            {body}
            {footer}
        </Card>
    )
}