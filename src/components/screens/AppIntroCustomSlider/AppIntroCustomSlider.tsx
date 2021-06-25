import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {SafeAreaView} from 'react-native-safe-area-context';

import {styles} from './styles';
import {slides} from './appIntroSliderItems';
import {languageTxt} from '../../../utils/languageTxt';

import AtlasLogo10 from '../../../assets/icons/splash_screen/atlasLogo10.svg';
import AtlasLogoHorizontal from '../../../assets/icons/logo/logoHorizontal.svg';

const renderPage = (activeIndex: any) => {
  return (
    <View style={styles.sliderContainer}>
      <View style={styles.sliderPagination}>
        <View style={[styles.item, activeIndex == 0 && styles.itemColor]} />
        <View style={[styles.item, activeIndex == 1 && styles.itemColor]} />
        <View style={[styles.item, activeIndex == 2 && styles.itemColor]} />
        <View style={[styles.item, activeIndex == 3 && styles.itemColor]} />
      </View>
      <SafeAreaView>
        <AtlasLogoHorizontal width={'100%'} height={50} />
        <AtlasLogo10 style={{marginTop: -100}} width={'100%'} height={400} />
      </SafeAreaView>
    </View>
  );
};

export const AppIntroCustomSlider = ({setShowRealApp}: any) => {
  const renderItem = ({item}: any) => {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <SafeAreaView>
            <TouchableOpacity
              onPress={() => setShowRealApp(true)}
              style={styles.buttonSkip}>
              <Text style={styles.buttonSkipTxt}>{languageTxt.skipTxt}</Text>
            </TouchableOpacity>
          </SafeAreaView>
        </View>
        <View style={styles.bodyContainer}>
          {item.image}
          <Text style={styles.descriptionContainer}>{item.description}</Text>
        </View>
      </View>
    );
  };

  return (
    <AppIntroSlider
      renderItem={renderItem}
      data={slides}
      renderPagination={renderPage}
    />
  );
};
