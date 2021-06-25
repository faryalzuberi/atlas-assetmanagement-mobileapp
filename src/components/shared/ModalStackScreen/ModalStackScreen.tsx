import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {colorConstants} from '../../../utils/colorConstants';
import BackArrowButton from '../BackArrowButton/BackArrowButton';
import {AppHeader} from '../AppHeader';

interface modalStackScreenProps {
  title: string;
  name: string;
  component: any;
  handleOnBack: Function;
  left?: string;
}

function ModalStackScreen({items}: any) {
  const Stack = createStackNavigator();
  const headerStyles = {
    headerStyle: {
      backgroundColor: colorConstants.primary,
      shadowOpacity: 0,
      elevation: 0,
    },
    headerTintColor: colorConstants.white,
  };
  console.log(items);
  return (
    <Stack.Navigator>
      {items.map(
        (
          {title, name, component, handleOnBack, left}: modalStackScreenProps,
          index: any,
        ) => {
          return (
            <Stack.Screen
              key={index}
              name={name}
              component={component}
              options={{
                header: () => <AppHeader />,
                // ...headerStyles,
                // headerTitleStyle: {
                //   fontWeight: 'bold',
                //   fontSize: 22,
                //   alignSelf: left ? left : 'center',
                //   marginRight: Platform.OS === 'android' ? 40 : 0,
                // },
                // headerShown: title == 'none' ? false : true,
                // title: title,
                // headerLeft: () => (
                //   <BackArrowButton onButtonPressCb={handleOnBack} />
                // ),
              }}
            />
          );
        },
      )}
    </Stack.Navigator>
  );
}

export default ModalStackScreen;
