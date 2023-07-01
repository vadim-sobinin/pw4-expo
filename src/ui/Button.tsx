import { Pressable, StyleProp, StyleSheet, Text, ViewStyle } from 'react-native';
import React from 'react';

const ButtonComponent = ({
  children,
  disabled = false,
  onPress,
  style,
}: {
  children: any;
  disabled?: boolean;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? '#B8DE64' : '#303030',
        },
        styles.button,
        style,
      ]}>
      {({ pressed }) => (
        <Text
          style={
            disabled
              ? [{ color: '#696969' }, styles.text]
              : [pressed ? { color: '#303030' } : { color: '#B8DE64' }, styles.text]
          }>
          {children}
        </Text>
      )}
    </Pressable>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 21,
    marginTop: 20,
    marginBottom: 50,
    marginRight: 16,
    marginLeft: 16,
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    padding: 18,
  },
});
