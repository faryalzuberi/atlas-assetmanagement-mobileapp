import {StyleSheet} from 'react-native';
import {colorConstants} from '../../../utils/colorConstants';
import {dimensionConstants} from '../../../utils/dimensionConstants';

export const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: dimensionConstants.errorBorderWidth,
    borderColor: colorConstants.white,
    borderRadius: dimensionConstants.borderRadius,
    overflow: 'hidden',
     marginTop: 10,

    shadowOffset: {
      width: dimensionConstants.shadowOffsetWidth,
      height: dimensionConstants.shadowOffsetHeight,
    },
    shadowOpacity: dimensionConstants.shadowOpacity,
    shadowRadius: dimensionConstants.shadowRadius,
    elevation: dimensionConstants.elevation,
  },
  error: {
    borderWidth: dimensionConstants.errorBorderWidth,
    borderColor: colorConstants.red,
    borderRadius: dimensionConstants.borderRadius,
    overflow: 'hidden',
    marginTop: 10,
    shadowOffset: {
      width: dimensionConstants.shadowOffsetWidth,
      height: dimensionConstants.shadowOffsetHeight,
    },
    shadowOpacity: dimensionConstants.shadowOpacity,
    shadowRadius: dimensionConstants.shadowRadius,
    elevation: dimensionConstants.elevation,
  },
  input: {
    color: 'red',
    fontSize: dimensionConstants.inputTxtSize,
    backgroundColor: colorConstants.white,
    marginVertical: -2,

  },
});
