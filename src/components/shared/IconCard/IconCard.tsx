import React from 'react'
import {View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';
import {colorConstants} from '../../../utils/colorConstants';
type IconCardProps = {
  title: string;
  imageElement: any;
};

 const IconCard = ({title, imageElement}: IconCardProps) => {
  return (
    <>
      <LinearGradient
        colors={[colorConstants.primary, colorConstants.secondary]}
        style={styles.cardContainer}>
            <View style={styles.imageContainer}>
          {imageElement}
          </View>
          <View style={styles.textContainer}>
          <Text style={{fontSize: 20, color: colorConstants.white}}>{title}</Text>
        </View>
        
      </LinearGradient>
    </>
  );
};
export default IconCard;