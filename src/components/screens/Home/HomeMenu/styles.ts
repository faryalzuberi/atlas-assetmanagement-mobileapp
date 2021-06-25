import {StyleSheet} from 'react-native';
import {colorConstants} from '../../../../utils/colorConstants';

export const styles = StyleSheet.create({
  bodyContainer: {
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 100,
  },
  sliderPagination: {
    flexDirection: 'row',
    alignSelf: 'center',
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
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
  },
});
