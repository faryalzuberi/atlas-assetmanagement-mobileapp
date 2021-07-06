import {StyleSheet} from 'react-native';
import {colorConstants} from '../../../utils/colorConstants';

export const styles = StyleSheet.create({
  loading: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: colorConstants.transparent,
    opacity: 1,
    zIndex: 3,
  },
  notLoading: {
    display: 'none',
  },
});
