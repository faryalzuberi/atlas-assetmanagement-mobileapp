import React, {useState} from 'react';

import {RootStackNavigator} from './components/navigations/RootStackNavigator';
import {TabNavigator} from './components/navigations/TabNavigator';
import {AppIntroCustomSlider} from './components/screens/AppIntroCustomSlider';

const App = () => {
  const [showRealApp, setShowRealApp] = useState(false);

  return (
    <>
      {/* <RootStackNavigator /> */}
      {showRealApp ? (
        <TabNavigator barColor="red" />
      ) : (
        <AppIntroCustomSlider setShowRealApp={setShowRealApp} />
      )}
    </>
  );
};
export default App;
