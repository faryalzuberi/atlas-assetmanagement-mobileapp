import React, {useState} from 'react';
import {View, Text} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-vector-icons/Ionicons';

import AtlasFundsLogo from '../../../assets/Icons/Splash/AtlasFunds.svg';

import {styles} from './styles';

const renderItem = ({item}: any) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      {item.image}
      <Text style={{}}>{item.title}</Text>
    </View>
  );
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

export const AppIntroCustomSlider = ({setShowRealApp}: any) => {
  const slides = [
    {
      key: 1,
      title: 'Title 1',
      text: 'Description.\nSay something cool',
      image: <AtlasFundsLogo />,
      backgroundColor: '#59b2ab',
    },
    {
      key: 2,
      title: 'Title 2',
      text: 'Other cool stuff',
      image: <AtlasFundsLogo />,
      backgroundColor: '#febe29',
    },
    {
      key: 3,
      title: 'Rocket guy',
      text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
      image: <AtlasFundsLogo />,
      backgroundColor: '#22bcb5',
    },
  ];

  return (
    <AppIntroSlider
      renderItem={renderItem}
      data={slides}
      showSkipButton={true}
      showNextButton={false}
      showDoneButton={true}
      renderDoneButton={renderDoneButton}
      renderSkipButton={renderSkipButton}
      onDone={() => {
        setShowRealApp(true);
      }}
      onSkip={() => {
        setShowRealApp(true);
      }}
    />
  );
};
