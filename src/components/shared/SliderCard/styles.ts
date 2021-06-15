import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 20,
    margin: 5,
    borderRadius: 8,
    resizeMode: 'contain',
  },
  cardContent: {
    flex: 3,
    flexDirection: 'column',
  },
  cardImage: {
    flex: 1,
    alignItems: 'flex-end',
  },
});
