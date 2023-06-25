import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Header from './componets/Header';
import Sort from './componets/Sort';
import Main from './componets/Main';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from '../../navigation/Tabs';

const MainPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header>Hello John!</Header>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
