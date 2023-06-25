import { StyleSheet, View } from 'react-native';
import React from 'react';
import LoginForm from './components/LoginForm';
import Footer from './components/Footer';

const LoginPage = () => {
  return (
    <View style={styles.container}>
      <LoginForm />
      <Footer />
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    gap: 124,
    justifyContent: 'flex-end',
    paddingBottom: 42,
    paddingLeft: 16,
    paddingRight: 16,
  },
});
