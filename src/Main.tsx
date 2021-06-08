import React from 'react';
import App from './App';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

const MainApp = () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
};

export default MainApp;
