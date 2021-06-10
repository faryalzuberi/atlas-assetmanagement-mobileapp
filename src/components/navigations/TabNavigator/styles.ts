import {StyleSheet} from 'react-native';
import colorConstants from '../../../utils/colorConstants';
import dimensionConstants from '../../../utils/dimensionConstants';

export const styles = StyleSheet.create({
  navigatorContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,

    shadowColor: colorConstants.black,
    shadowOffset: {
      width: dimensionConstants.shadowOffsetWidth,
      height: dimensionConstants.shadowOffsetHeight,
    },
    shadowOpacity: dimensionConstants.shadowOpacity,
    shadowRadius: dimensionConstants.shadowRadius,
    elevation: dimensionConstants.elevation,
  },
  navigator: {
    borderTopWidth: 0,
    backgroundColor: colorConstants.transparent,
    elevation: 30,
  },
  xFillLine: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 34,
  },
});
