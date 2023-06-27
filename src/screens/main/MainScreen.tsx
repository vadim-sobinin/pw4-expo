import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import Header from './componets/Header';
import Sort from './componets/Sort';
import Main from './componets/Main';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from '../../navigation/Tabs';
import { AuthContext } from '../../context/AuthContext';
import { User } from '../../@types/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
const MainScreen = () => {
  // @ts-ignore
  const { userInfo, userToken }: { userInfo: User } = useContext(AuthContext);
  // AsyncStorage.getItem('userInfo')
  //   .then((data) => JSON.parse(data))
  //   .then((res) => console.log(res));

  return (
    <SafeAreaView style={styles.container}>
      <Header avatarUrl={userInfo.avatarUrl}>
        {userInfo.firstName ? `Hello ${userInfo.firstName}!` : 'Welcome New User!'}
      </Header>
      <Tabs />
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
  },
});
