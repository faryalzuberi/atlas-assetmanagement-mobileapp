import {StyleSheet} from 'react-native';
import { colorConstants } from '../../../../../../utils/colorConstants';

export const styles = StyleSheet.create({
    container:{
       paddingHorizontal: 15,
       paddingVertical: 10,
       justifyContent: 'center',
    },
    textStyle:{
      color: colorConstants.primary,
      fontSize: 15,
      marginTop: 5
    }
  });