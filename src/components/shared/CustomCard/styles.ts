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
    backgroundColor: colorConstants.white,
    
  },
  activeCard: {
    flex: 1,
    borderRadius: 12,
    backgroundColor: colorConstants.lightGray,
    
  },
  cardContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  accordianContainer:{
    backgroundColor: colorConstants.white,
    marginHorizontal: '3%',
    paddingVertical: 0
    
  },
  accordianButtonLabelStyle:{
    fontSize: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  accordianButtonStyle:{
    marginBottom: '2%',
  },
  accordianTitleStyle1:{
    fontSize: 9, 
    color: colorConstants.gray
  },
  accordianTitleStyle2:{
    fontSize: 10, 
    color: colorConstants.black
  },
  accordianDescriptionStyle:{
    fontSize: 8, 
    color: colorConstants.gray,
    paddingTop: '1%', 
    lineHeight: 14
  },
  accordianContainer2:{
    backgroundColor: colorConstants.white,
    marginHorizontal: '3%',
    paddingVertical: 0,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
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
