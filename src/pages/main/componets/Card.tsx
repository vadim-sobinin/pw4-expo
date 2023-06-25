import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Avatar, Icon, Image } from '@rneui/themed';
//@ts-ignore
import avatarImage from '../img/otherAvatar.jpg';
//@ts-ignore
import mainImage from '../img/main.jpg';

const Card = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Apple love</Text>
        <Text style={styles.date}>11.09.22</Text>
      </View>
      <View style={styles.body}>
        <Image source={mainImage} style={styles.image} />
      </View>
      <View style={styles.footer}>
        <View style={styles.author}>
          <Avatar source={avatarImage} rounded size={24} />
          <Text style={styles.name}>Hannah K.</Text>
        </View>
        <View style={styles.reactions}>
          <Icon name="heart-outline" size={20} type="ionicon" color="#000000" />
          <Text style={styles.counterText}>137</Text>
          <Icon name="share-social" size={20} type="ionicon" color="#000000" />
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4F5F4',
    paddingTop: 24,
    paddingRight: 20,
    paddingBottom: 32,
    paddingLeft: 20,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  title: {
    color: '#131313',
    fontWeight: '500',
    fontSize: 16,
  },
  date: {
    color: '#9B9B9B',
    fontSize: 14,
  },
  image: {
    width: '100%',
    height: 225,
    borderRadius: 17,
    marginBottom: 20,
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  author: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  reactions: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  body: {},
  avatar: {},
  name: {
    color: '#9B9B9B',
    fontSize: 14,
  },
  counterText: {
    fontSize: 14,
    color: '#131313',
    marginLeft: 6,
    marginRight: 14,
  },
});
