import {StyleSheet} from 'react-native';
import { colorConstants } from '../../../utils/colorConstants';

export const styles = (height: any) => StyleSheet.create({
    bodyContainer:{
        width: '10%',
        justifyContent: 'center',
        height: height,
        borderRadius: 40,
        marginRight: 15,
        marginTop: 30,
        backgroundColor: colorConstants.primary
    }
});