import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Avatar, Icon, Image } from '@rneui/themed';
import { Post } from '../../../@types/types';

const convertDate = (date: string) => {
  let dateInProcess = date.slice(0, 10).split('-');
  dateInProcess[0] = dateInProcess[0].slice(2, 4);
  return dateInProcess.reverse().join('.');
};

const Card = ({ data }: { data: Post }) => {
  return (
    <View style={styles.gap}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.date}>{convertDate(data.createdAt)}</Text>
        </View>
        <View style={styles.body}>
          <Image source={{ uri: data.mediaUrl }} style={styles.image} />
        </View>
        <View style={styles.footer}>
          <View style={styles.author}>
            <Avatar source={{ uri: data.author.avatarUrl }} rounded size={24} />
            <Text style={styles.name}>
              {data.author.firstName} {data.author.lastName.slice(0, 1)}
            </Text>
          </View>
          <View style={styles.reactions}>
            <Icon
              name={data.isLiked ? 'heart' : 'heart-outline'}
              size={20}
              type="ionicon"
              color="#000000"
            />
            <Text style={styles.counterText}>{data.likesCount}</Text>
            <Icon name="share-social" size={20} type="ionicon" color="#000000" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  gap: { paddingBottom: 4 },
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