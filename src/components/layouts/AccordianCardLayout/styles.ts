import {StyleSheet} from 'react-native';
import {colorConstants} from '../../../utils/colorConstants';

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
    marginTop: '2%'
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

 
});