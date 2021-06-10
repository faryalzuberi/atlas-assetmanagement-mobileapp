import React, {useState} from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import RootStackNavigator from './components/navigations/RootStackNavigator';
import {TabNavigator} from './components/navigations/TabNavigator';

const slides = [
  {
    key: 1,
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    // image: require('./assets/1.jpg'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    title: 'Title 2',
    text: 'Other cool stuff',
    // image: require('./assets/2.jpg'),
    backgroundColor: '#febe29',
  },
  {
    key: 3,
    title: 'Rocket guy',
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    // image: require('./assets/3.jpg'),
    backgroundColor: '#22bcb5',
  },
];

const App = () => {
  const [showRealApp, setShowRealApp] = useState(false);

  const renderItem = ({item}) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'gray',
        }}>
        <Text style={{}}>{item.title}</Text>
        {/* <Image source={item.image} /> */}
        <Text style={{}}>{item.text}</Text>
      </View>
    );
  };

  const onDone = () => {
    setShowRealApp(true);
  };

  const renderSkipButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Text>Skip</Text>
      </View>
    );
  };

  const renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon name="md-checkmark" color="rgba(255, 255, 255, .9)" size={24} />
      </View>
    );
  };

  return (
    <>
      {/* <RootStackNavigator /> */}
      {showRealApp ? (
        <TabNavigator barColor="red" />
      ) : (
        <AppIntroSlider
          renderItem={renderItem}
          data={slides}
          showSkipButton={true}
          showNextButton={false}
          showDoneButton={true}
          renderDoneButton={renderDoneButton}
          renderSkipButton={renderSkipButton}
          onDone={onDone}
          onSkip={onDone}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  buttonCircle: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 15,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default App;
