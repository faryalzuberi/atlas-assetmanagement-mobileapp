import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {AppHeader} from '../AppHeader';

interface modalStackScreenProps {
  name: string;
  component: any;
  handleOnBack: Function;
  backButton?: boolean;
}

function ModalStackScreen({items}: any) {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      {items.map(
        (
          {name, component, handleOnBack, backButton}: modalStackScreenProps,
          index: any,
        ) => {
          return (
            <Stack.Screen
              key={index}
              name={name}
              component={component}
              options={{
                header: () => (
                  <AppHeader
                    onButtonPressCb={handleOnBack}
                    backButton={backButton}
                  />
                ),
              }}
            />
          );
        },
      )}
    </Stack.Navigator>
  );
}

export default ModalStackScreen;
