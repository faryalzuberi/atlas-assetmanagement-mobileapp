import {StyleSheet} from 'react-native';

import colorConstants from '../../../utils/colorConstants';
import dimensionConstants from '../../../utils/dimensionConstants';

export const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 5,
    padding: 6,
  },
  images: {
    alignSelf: 'center',
    marginBottom: 4,
  },
  paragraph: {
    textAlign: 'center',
    color: colorConstants.primary,
    fontWeight: '700',
  },
});
