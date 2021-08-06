import {StyleSheet} from 'react-native';
import { colorConstants } from '../../../../../utils/colorConstants';

export const styles = StyleSheet.create({
    container:{
       paddingHorizontal: 3,
       paddingVertical: 10,
       justifyContent: 'center',
    },
    titleStyle: {
         color: colorConstants.white 
    },
   
    card: {
        flex: 1,
        borderRadius: 12,
        backgroundColor: colorConstants.primary,
        
      },
      accordianContainer:{
          backgroundColor: colorConstants.white,
          paddingVertical: 5,
          borderWidth: 2,
          borderColor: colorConstants.white,
          borderBottomLeftRadius: 8,
          borderBottomRightRadius: 8,
          flexDirection: 'column',
         
      },
      accordianRow:{
          flex:1,
          flexDirection: 'row',
          
      },
      row2input1:{
          flex: 1.3
      },
      row2input2:{
          flex:1
      },
      row3input1:{
        flex: 1
    },
    row3input2:{
        flex:1
    }
  });