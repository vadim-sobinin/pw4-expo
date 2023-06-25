import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Card from './Card';
import Sort from './Sort';

const Main = () => {
  return (
    <View style={styles.container}>
      <Sort />
      <Card />
      <Card />
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    gap: 4,
    backgroundColor: '#fff',
  },
});
