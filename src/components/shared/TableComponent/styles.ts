import {StyleSheet} from 'react-native';
import { colorConstants } from '../../../utils/colorConstants';



export const styles = StyleSheet.create({

  tableContainer: 
  { flex: 1,
    backgroundColor: '#fff'
   },
   table: {
    borderWidth: 1,
    borderRadius: 15
   },
  head: { 
    flex: 1,
    backgroundColor: colorConstants.lightGray
   },
  text: 
  {
    fontSize: 7,
     margin: 6 
  },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#f6f8fa' },
  row: {  height: 28  },

});