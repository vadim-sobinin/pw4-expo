import { StyleSheet, View } from 'react-native';
import React from 'react';
import LoginForm from './components/LoginForm';
import Footer from './components/Footer';

const LoginScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <LoginForm navigation={navigation} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {},
});
