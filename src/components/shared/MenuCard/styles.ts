import {StyleSheet} from 'react-native';
import {colorConstants} from '../../../utils/colorConstants';

export const styles = StyleSheet.create({
  buttonClick: {
    flex: 1,
  },
  card: {
    flex: 1,
    margin: 5,
    padding: 4,
  },
  images: {
    alignSelf: 'center',
  },
  paragraph: {
    textAlign: 'center',
    color: colorConstants.primary,
    fontWeight: '700',
    fontSize: 13,
    marginTop: -5,
  },
});
