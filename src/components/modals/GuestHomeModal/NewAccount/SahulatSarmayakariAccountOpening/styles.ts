import { StyleSheet } from 'react-native';
import { colorConstants } from '../../../../../utils/colorConstants';

export const styles = StyleSheet.create({
    topTabStyle: {
        borderBottomColor: colorConstants.black,
        borderBottomWidth: 0.5,
        flex: 1,
    },
    tabStyle: {
        flex: 1

    },
    labelStyle: {
        fontSize: 10,
        textTransform: 'none',
        flex: 1
    }
});