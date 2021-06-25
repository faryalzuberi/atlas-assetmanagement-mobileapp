import React from 'react';
import {TouchableOpacity} from 'react-native';
import BackButton from '../../../assets/icons/backButton.svg';

interface backArrowButtonProps {
  onButtonPressCb: Function;
}
const BackArrowButton = ({onButtonPressCb}: backArrowButtonProps) => {
  return (
    <TouchableOpacity
      style={{marginLeft: 20, paddingRight: 15, paddingVertical: 5}}
      onPress={() => onButtonPressCb()}>
      <BackButton />
    </TouchableOpacity>
  );
};

export default BackArrowButton;
