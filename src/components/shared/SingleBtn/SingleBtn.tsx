import React from 'react';
import { Text, TouchableOpacity } from 'react-native'; 
import LinearGradient from 'react-native-linear-gradient';
import { colorConstants } from '../../../utils/colorConstants';
import { styles } from './styles';
type TextInputProps = {
    text: string;
    height: any,
  };

const SingleBtn = ({text, height}: TextInputProps) => {

    return(
        <LinearGradient
        colors={[colorConstants.primary, colorConstants.secondary]}
        style={styles(height).bodyContainer} >
            <TouchableOpacity style={{justifyContent: 'center',alignItems: 'center',}}>
            <Text style={{color: colorConstants.white, fontSize: 18}}>{text}</Text>
            </TouchableOpacity>
        </LinearGradient>
        
    )
    
}

export default SingleBtn;