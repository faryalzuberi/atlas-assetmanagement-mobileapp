import React from 'react';
import { View, TextInput } from 'react-native'; 
import { styles } from './styles';
type TextInputProps = {
    placeholder: string;
    height: any,
    multipleLine: boolean
  };

const AppTextInput = ({placeholder, height, multipleLine}: TextInputProps) => {

    return(
        <View style={styles(height).bodyContainer}>
            <TextInput  placeholder={placeholder} multiline={multipleLine}  />
        </View>
    )
    
}

export default AppTextInput;