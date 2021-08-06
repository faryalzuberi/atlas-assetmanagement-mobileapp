import {StyleSheet} from 'react-native';
import { colorConstants } from '../../../../../../utils/colorConstants';



export const styles = StyleSheet.create({
  container:{
     paddingHorizontal: 15,
     paddingVertical: 10,
     justifyContent: 'center',
     marginBottom: 80
  },
  textStyle:{
    color: colorConstants.primary,
    fontSize: 16
  }
});