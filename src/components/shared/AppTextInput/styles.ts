import {StyleSheet} from 'react-native';
import { colorConstants } from '../../../utils/colorConstants';

export const styles = (height: any) => StyleSheet.create({
    bodyContainer:{
        width: '100%',
        height: height,
        borderColor: '#C8C8C8',
        borderWidth: 2,
        borderRadius: 8,
        marginTop: 10,
        backgroundColor: colorConstants.white
    }
});