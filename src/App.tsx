import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
const Tab = createMaterialBottomTabNavigator();

const App = () => {
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={<></>} />
        <Tab.Screen name="Settings" component={<></>} />
      </Tab.Navigator>
    </>
  );
};
export default App;
