import React from 'react';
import { TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colorConstants } from '../../../utils/colorConstants';
import { styles } from './styles';
type TextInputProps = {
    icon: any;
    height: any,
  };

const IconBtn = ({icon, height}: TextInputProps) => {

    return(
        <LinearGradient
        colors={[colorConstants.primary, colorConstants.secondary]}
        style={styles(height).bodyContainer}>
            <TouchableOpacity style={{justifyContent: 'center',alignItems: 'center',}}>
            {icon}
            </TouchableOpacity>
        </LinearGradient>
        
    )
    
}

export default IconBtn;