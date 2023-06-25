import { View, Alert, Text, StyleSheet } from 'react-native';
import React from 'react';

import ButtonComponent from '../../../ui/Button';
import TextLink from '../../../ui/TextLink';

const Footer = () => {
  const pressBtn = () => {
    Alert.alert('Hi');
  };
  return (
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <Text style={styles.text}>No account?</Text>
        <TextLink>Register</TextLink>
      </View>
      <ButtonComponent disabled={false}>Continue</ButtonComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexShrink: 1,
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
    justifyContent: 'flex-end',
  },
  textWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    color: '#131313',
  },
});

export default Footer;