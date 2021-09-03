import {StyleSheet} from 'react-native';
import {colorConstants} from '../../../utils/colorConstants';

export const styles = StyleSheet.create({
  menuCard: {
    flex: 1,
    margin: 10,
  },
  flatList: {
    marginBottom: 45,
  },

  header: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 25,
    textAlign: 'center',
    color: colorConstants.primary,
  },
  headerParagraph: {
    paddingHorizontal: 20,
    fontSize: 12,
    lineHeight: 18,
    color: colorConstants.gray,
    textAlign: 'justify',
  },
  titleLine: {
    borderColor: colorConstants.red,
    borderWidth: 1,
    width: 80,
    marginTop: 5,
    marginBottom: 10,
  },
});
