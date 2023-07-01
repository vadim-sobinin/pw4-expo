import { SafeAreaView, StyleSheet, View } from 'react-native';
import React from 'react';
import LoginForm from './components/LoginForm';
import Footer from './components/Footer';
import { KeyboardShift } from '../../components/KeyboardShift';

const LoginScreen = ({ navigation }: { navigation: any }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardShift>
        <LoginForm navigation={navigation} />
      </KeyboardShift>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {},
});
