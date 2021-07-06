import React from 'react';
import App from './App';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from 'react-query';
// Create a client
const queryClient = new QueryClient();

const MainApp = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <App />
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default MainApp;
