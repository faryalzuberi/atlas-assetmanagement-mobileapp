import {StyleSheet} from 'react-native';
import {colorConstants} from '../../../../utils/colorConstants';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: 80,
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    top: 0,
  },
  button: {
    top: -27,
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius: 35,
    backgroundColor: colorConstants.primary,
  },
});
