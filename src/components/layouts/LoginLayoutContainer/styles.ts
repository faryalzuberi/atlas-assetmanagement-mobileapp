import {StyleSheet} from 'react-native';
import { colorConstants } from '../../../utils/colorConstants';

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerContainer: {
        flex: 1,
        backgroundColor: colorConstants.primary
    },
    bodyContainer: {
        flex: 2.5,
        backgroundColor: colorConstants.lightGray,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderWidth: 1,
        borderColor: colorConstants.primary,
        paddingHorizontal: 25
    },
    textContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    loginText:{
        fontSize: 35,
        color: colorConstants.primary
    },
    signInText:{
        fontSize: 18,
        color: colorConstants.gray
    },
    inputContainer: {
        flex: 2,
        flexDirection: 'column',
    },
    biometricStyle:{
        flexDirection: 'row',
        marginTop: 15,
        justifyContent: 'space-between'
    },
    faceIdContainer: {
        
        color: colorConstants.primary
    },
    touchIdContainer: {
    
        color: colorConstants.primary
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingBottom: 50
    },
});