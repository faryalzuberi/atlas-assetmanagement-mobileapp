import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import {RootStackNavigator} from './components/navigations/RootStackNavigator';
import {AppIntroCustomSlider} from './components/screens/AppIntroCustomSlider';

const App = () => {
  const [showRealApp, setShowRealApp] = useState(false);

  return (
    <>
      {showRealApp ? (
        <RootStackNavigator />
      ) : (
        <AppIntroCustomSlider setShowRealApp={setShowRealApp} />
      )}
    </>
  );
};
export default App;
