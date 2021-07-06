import {StyleSheet} from 'react-native';
import {colorConstants} from '../../../utils/colorConstants';
import {dimensionConstants} from '../../../utils/dimensionConstants';

export const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
  },
  card: {
    flex: 1,
    borderRadius: 12,
  },
  cardContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  listTitle: {
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '700',
    color: colorConstants.primary,
  },

  dashboardTitle: {
    textAlign: 'center',
    fontSize: 12,
    lineHeight: 13,
    fontWeight: '700',
    color: colorConstants.primary,
    marginTop: -10,
  },

  linearCard: {
    borderRadius: 10,
  },

  carouselContent: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 10,
  },
  carouselDescription: {
    flex: 2,
    justifyContent: 'center',
  },
  carouselTitle: {
    color: colorConstants.white,
  },
  carouselParagraph: {
    fontSize: 12,
    lineHeight: 15,
    fontWeight: '500',
    color: colorConstants.white,
  },
  carouselIcon: {
    flex: 1,
    justifyContent: 'center',
  },

  headerContent: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 5,
    paddingBottom: 5,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colorConstants.white,
  },

  titleLine: {
    borderColor: colorConstants.red,
    borderWidth: 1,
    width: 40,
    marginBottom: 10,
  },
  detailTitle: {
    color: colorConstants.primary,
  },
  detailDesignation: {
    color: colorConstants.red,
    fontSize: 15,
    lineHeight: 16,
    marginBottom: 8,
  },
  detailParagraph: {
    textAlign: 'justify',
  },
  detailImage: {
    width: 110,
    height: 135,
    marginRight: 10,
  },
});
