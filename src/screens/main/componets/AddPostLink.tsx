import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { FAB, Icon } from '@rneui/themed';

const AddPostLink = () => {
  return (
    // <FAB
    //   visible={true}
    //   placement="right"
    //   icon={{ name: 'add', color: 'white', size: 24, style: {} }}
    //   color="#87B71F"
    //   style={{}}
    // />
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? '#303030' : '#87B71F',
        },
        styles.body,
      ]}>
      <Icon name="add-outline" type="ionicon" color="#fff" size={24} />
    </Pressable>
  );
};

export default AddPostLink;

const styles = StyleSheet.create({
  body: {
    width: 56,
    height: 56,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    position: 'absolute',
    bottom: 32,
    right: 16,
  },
});
