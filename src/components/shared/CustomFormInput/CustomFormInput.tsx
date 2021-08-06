import React, {useState} from 'react';
import {View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {styles} from './styles';

const CustomFormInput = ({
  placeHolder,
  LeftIcon,
  mode,
  RightIcon,
  name,
  value,
  error,
  type,
  handleChange,
  rightIconClick,
  ...props
}: any) => {
  return (
    <View style={error ? styles.error : styles.inputContainer}>
      <TextInput
        keyboardType={type}
        label={placeHolder}
        returnKeyType={'done'}
        value={value}
         mode={mode ? mode : 'flat'}
        style={styles.input}
        underlineColor="transparent"
        left={LeftIcon && <TextInput.Icon name={LeftIcon} />}
        right={
          rightIconClick
            ? RightIcon && (
                <TextInput.Icon
                  name={RightIcon}
                  onPress={() => rightIconClick()}
                />
              )
            : RightIcon && <TextInput.Icon name={RightIcon} />
        }
        onChangeText={text => handleChange(text)}
        theme={{
          colors: {
            primary: 'grey',
            text: 'black',
            placeholder: 'grey',
            disabled: 'grey',
            accent: 'grey',
          },
        }}
        {...props}
      />
    </View>
  );
};

export default CustomFormInput;
