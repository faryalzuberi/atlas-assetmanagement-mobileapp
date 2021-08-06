import React from 'react';
import { Text, TouchableOpacity } from 'react-native'; 
import LinearGradient from 'react-native-linear-gradient';
import { colorConstants } from '../../../utils/colorConstants';
import { styles } from './styles';
type TextInputProps = {
    text: string;
    width: any,
    color?: any,
    RightIcon?: any,
    onPressCB?: any
  };

const SingleBtn = ({text, width, RightIcon, color, onPressCB}: TextInputProps) => {

    return(
        <LinearGradient
        colors={color ? [color,color] :[colorConstants.primary, colorConstants.secondary]}
        style={styles(width).bodyContainer} >
            <TouchableOpacity style={styles(width).buttonContainer} onPress={()=> onPressCB()}>
                {RightIcon && RightIcon}
            <Text style={styles(width).buttonText}>{text}</Text>
            </TouchableOpacity>
        </LinearGradient>
    )
}

export default SingleBtn;