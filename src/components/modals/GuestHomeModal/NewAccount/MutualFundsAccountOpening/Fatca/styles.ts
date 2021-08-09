import { StyleSheet } from 'react-native';
import { colorConstants } from '../../../../../../utils/colorConstants';



export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    justifyContent: 'center',
    marginBottom: 20
  },
  textStyle: {
    color: colorConstants.primary,
    fontSize: 15,
    marginTop: 5
  },
  declaration: {
    flex: 1,
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: colorConstants.white,
    borderRadius: 8,
    backgroundColor: colorConstants.white,
    paddingHorizontal: 5,
    marginTop: 10
  },
  confirmationContainer: {
    flex: 1,
    marginTop: 10,
    flexDirection: 'column',
  },
  confirmationTextStyle: {
    color: colorConstants.black,
    fontSize: 8,
    flex: 1,
    marginBottom: 5
  }
});