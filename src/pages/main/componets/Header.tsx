import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
//@ts-ignore
import avatar from '../img/avatar.jpg';

const Header = ({ children }: { children: any }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
      <Image style={styles.avatar} source={avatar} alt="Avatar" />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    marginLeft: 16,
    marginRight: 16,
    marginTop: 16,
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 32,
    lineHeight: 40,
    fontWeight: '500',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
