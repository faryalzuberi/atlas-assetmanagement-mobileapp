import {StyleSheet} from 'react-native';

import {colorConstants} from '../../../utils/colorConstants';

type styleProps = {index?: number};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorConstants.white,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  buttonSkip: {
    margin: 10,
    paddingHorizontal: 25,
    paddingVertical: 8,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: colorConstants.primary,
    backgroundColor: colorConstants.white,
  },
  buttonSkipTxt: {
    fontSize: 15,
    fontWeight: '700',
    color: colorConstants.primary,
  },

  bodyContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  descriptionContainer: {
    fontSize: 15,
    textAlign: 'center',
    paddingHorizontal: 20,
    marginTop: 40,
  },

  sliderContainer: {
    flex: 0.5,
    backgroundColor: colorConstants.white,
    flexDirection: 'column',
  },
  sliderPagination: {
    flexDirection: 'row',
    alignSelf: 'center',
    paddingBottom: 40,
    backgroundColor: colorConstants.white,
  },
  item: {
    width: 12,
    height: 12,
    borderRadius: 10,
    backgroundColor: 'rgb(220,220,220)',
    marginHorizontal: 5,
  },
  itemColor: {
    backgroundColor: colorConstants.primary,
  },
});
