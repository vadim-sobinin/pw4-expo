import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import CongratsLight from '../img/Congrats-light.png';
import CongratsDark from '../img/Congrats-dark.png';
import { Image } from '@rneui/themed';

const SuccessReg = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text>Congrats</Text>
      </View>
      <Image source={CongratsLight} style={styles.image} />
      <Text>SuccessReg</Text>
    </View>
  );
};

export default SuccessReg;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 313,
    height: 95,
  },
});
