import {StyleSheet} from 'react-native';
import {colorConstants} from '../../../utils/colorConstants';

export const styles = StyleSheet.create({
  sliderPagination: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 10,
  },
  item: {
    width: 30,
    height: 7,
    borderRadius: 4,
    backgroundColor: colorConstants.gray,
    marginHorizontal: 5,
  },
  itemColor: {
    backgroundColor: colorConstants.primary,
  },
});
