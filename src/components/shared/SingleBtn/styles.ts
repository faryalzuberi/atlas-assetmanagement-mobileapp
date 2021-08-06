import {StyleSheet} from 'react-native';
import { colorConstants } from '../../../utils/colorConstants';

export const styles = (width: any) => StyleSheet.create({
    bodyContainer:{
        width: width,
        justifyContent: 'center',
        height: 40,
        borderRadius: 20,
        marginTop: 30,
        alignSelf: 'center'
    },
    buttonContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    buttonText:{
        color: colorConstants.white,
        fontSize: 16
    }
});


