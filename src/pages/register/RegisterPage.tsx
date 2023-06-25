import { StyleSheet, View } from 'react-native';
import React from 'react';
import RegisterForm from './components/RegisterForm';
import Footer from './components/Footer';
import SuccessReg from './components/SuccessReg';

const RegisterPage = () => {
  return (
    <View style={styles.container}>
      <RegisterForm />
      <Footer />
      {/* <SuccessReg /> */}
    </View>
  );
};

export default RegisterPage;

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
