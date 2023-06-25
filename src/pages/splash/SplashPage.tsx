import { View, ImageBackground, StyleSheet } from 'react-native';
import React from 'react';
import Splash from './components/Splash';

import splashImg from './img/splash-bg.jpg';

const SplashPage = () => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.container} source={splashImg} resizeMode="cover">
        <Splash />
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
export default SplashPage;
