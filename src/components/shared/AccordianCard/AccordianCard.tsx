import React from 'react';
import {  TouchableOpacity } from 'react-native';
import { List } from 'react-native-paper';


interface accordianCardProps {
  body: JSX.Element;
}
export const AccordianCard = ({
  body
}: accordianCardProps) => {
  return (
    <>
        <TouchableOpacity
          activeOpacity={0.9}
          >
          <List.Section >
              {body}

          </List.Section>
          
        </TouchableOpacity>
    </>
  );
};
 



            

         

