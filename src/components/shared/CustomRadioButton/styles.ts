import {StyleSheet} from 'react-native';
import {colorConstants} from '../../../utils/colorConstants';
import {dimensionConstants} from '../../../utils/dimensionConstants';

export const styles = StyleSheet.create({
    app: {
        marginHorizontal: "auto",
        maxWidth: 500
      },
    
      radioButtonContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 5,
        marginRight: 20,
        
      },
      radioButton: {
        height: 12,
        width: 12,
        backgroundColor: "#F8F8F8",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#E6E6E6",
        alignItems: "center",
        justifyContent: "center"
      },
      radioButtonIcon: {
        height: 12,
        width: 12,
        borderRadius: 7,
        backgroundColor: "#2d2b7f"
      },
      radioButtonText: {
        fontSize: 12,
        marginLeft: 5
      },
      text: {
        fontSize: 10,
        marginVertical: 5
      }
});
