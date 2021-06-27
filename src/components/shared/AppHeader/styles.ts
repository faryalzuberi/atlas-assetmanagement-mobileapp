import {StyleSheet} from 'react-native';
import {colorConstants} from '../../../utils/colorConstants';
import {dimensionConstants} from '../../../utils/dimensionConstants';

export const styles = StyleSheet.create({
  header: {
    backgroundColor: colorConstants.white,
    marginVertical: 10,
    elevation: 1,
  },
  logo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
