import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { RefObject, useState } from 'react';
import { Icon, Input, InputProps } from '@rneui/themed';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailInputColor, setEmailInputColor] = useState('#9B9B9B');
  const [passwordInputColor, setPasswordInputColor] = useState('#9B9B9B');

  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.titleBlock}>
        <Text style={styles.title}>Log in</Text>
        <Text style={styles.subtitle}>You will be able to fully communicate</Text>
      </View>
      <View style={styles.formBlock}>
        <Input
          placeholder={`Enter your email`}
          placeholderTextColor={'#9B9B9B'}
          errorStyle={{ color: '#C2534C', fontSize: 14, lineHeight: 20 }}
          errorMessage="Enter correct e-mail"
          inputStyle={{ color: '#131313', fontSize: 16 }}
          inputContainerStyle={{ borderColor: emailInputColor }}
          onFocus={() => setEmailInputColor('#131313')}
          onBlur={() => setEmailInputColor('#9B9B9B')}
          onChangeText={setEmail}
          value={email}
          label={'E-mail'}
          labelStyle={styles.label}
        />

        <Input
          placeholder={`Enter your password`}
          placeholderTextColor={'#9B9B9B'}
          errorStyle={{ color: '#C2534C', fontSize: 14, lineHeight: 20 }}
          errorMessage="Enter correct password"
          inputStyle={{ color: '#131313', fontSize: 16 }}
          inputContainerStyle={{ borderColor: passwordInputColor }}
          onFocus={() => setPasswordInputColor('#131313')}
          onBlur={() => setPasswordInputColor('#9B9B9B')}
          onChangeText={setPassword}
          rightIcon={
            passwordVisible ? (
              <Icon
                name="eye-outline"
                type="ionicon"
                color="#9B9B9B"
                onPress={() => setPasswordVisible(false)}
              />
            ) : (
              <Icon
                name="eye-off-outline"
                type="ionicon"
                color="#9B9B9B"
                onPress={() => setPasswordVisible(true)}
              />
            )
          }
          secureTextEntry={!passwordVisible}
          value={password}
          label={'Password'}
          labelStyle={styles.label}
        />
      </View>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  label: {
    color: '#9B9B9B',
    fontSize: 14,
  },
  input: {},
  container: {
    flexGrow: 1,

    display: 'flex',
    justifyContent: 'flex-end',
  },
  titleBlock: {
    marginBottom: 40,
  },
  title: {
    color: '#87B71F',
    fontSize: 32,
    lineHeight: 40,
  },
  subtitle: {
    color: '#131313',
    fontSize: 16,
    lineHeight: 20,
    marginTop: 3,
  },
  formBlock: {
    marginBottom: 16,
  },
});
