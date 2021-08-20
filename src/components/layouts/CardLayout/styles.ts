import {StyleSheet} from 'react-native';
import { colorConstants } from '../../../utils/colorConstants';

export const styles = StyleSheet.create({
  
    linearCard: {
        borderRadius: 10,
        paddingHorizontal: 5,
        paddingVertical: 5
      },
      headerContent: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 10,
        
      },
      carouselDescription: {
        flex: 2,
        justifyContent: 'center',
      },
     
      headerTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: colorConstants.white,
      },
      icon:{
          flex:0.4
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
        marginBottom: '4%'
      },
      detailImage: {
        width: 110,
        height: 135,
        marginRight: 10,
      },
      titleLine: {
        borderColor: colorConstants.red,
        borderWidth: 1,
        width: 40,
        marginBottom: 10,
      },
      paragraphContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap', 
        marginBottom: '4%'
      },
      paragraphText1:{
        flex: 1.2, 
        alignSelf: 'center'
      },
      paragraphText2:{
        flex: 0.2, 
        alignSelf: 'center'
      },
      paragraphText3:{
        flex: 2, 
        alignSelf: 'center',
      },
      cardContainer: {
        flex: 1,
        
      },
      cardContent: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      dashboardTitle: {
        textAlign: 'center',
        fontSize: 12,
        lineHeight: 13,
        fontWeight: '700',
        color: colorConstants.primary,
        marginTop: -10,
      },
      card: {
        flex: 1,
        borderRadius: 12,
        backgroundColor: colorConstants.white,
        
      },
      carouselContent: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 10,
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
      listTitle: {
        textAlign: 'center',
        fontSize: 14,
        lineHeight: 20,
        fontWeight: '700',
        color: colorConstants.primary,
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
      activeCard: {
        flex: 1,
        borderRadius: 12,
        backgroundColor: colorConstants.lightGray,
        
      },
});