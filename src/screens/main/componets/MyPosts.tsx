import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useContext, useState } from 'react';
import Card from './Card';
import { ApolloError, useQuery } from '@apollo/client';
import { GET_FAVORITES, GET_MYPOST, GET_POSTS } from '../../../apollo/requests';
import Spinner from '../../../ui/Spinner';
import { AuthContext } from '../../../context/AuthContext';
import { FavoritesData, MyPostsData, Post, PostsReqData, User } from '../../../@types/types';
import NoFavorites from './NoFavorites';
import Header from './Header';
import AddPostLink from './AddPostLink';
import { SwipeListView } from 'react-native-swipe-list-view';
import { Icon } from '@rneui/themed';

const MyPosts = () => {
  // @ts-ignore
  const { userToken, userInfo } = useContext(AuthContext);

  const { loading, error, data, refetch } = useQuery<MyPostsData | undefined>(GET_MYPOST, {
    variables: {
      input: {},
    },
    context: {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userToken}`,
      },
    },
    onCompleted(data) {},
  });

  if (loading || !data) {
    return <Spinner />;
  }

  if (error) {
    console.log('My posts... ', error);
  } else {
    return (
      <View style={styles.container}>
        <Header avatarUrl={userInfo.avatarUrl}>My posts</Header>
        {data?.myPosts.data.length === 0 ? (
          <NoFavorites>You haven't posted any posts yet</NoFavorites>
        ) : (
          <SwipeListView
            data={data.myPosts.data}
            renderItem={({ item }: { item: Post }) => <Card data={item} />}
            renderHiddenItem={renderHiddenItem}
            rightOpenValue={-73}
            disableRightSwipe={true}
          />
        )}
        <AddPostLink />
      </View>
    );
  }
};

export default MyPosts;

const renderHiddenItem = () => (
  <View style={styles.rowBack}>
    <View style={[styles.backRightBtn, styles.backRightBtnRight]}>
      <Icon name="trash" type="ionicon" color="#fff" size={32} />
      <Text style={styles.text}>Delete</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  list: {
    // marginBottom: 80,
  },
  text: {
    color: '#fff',
    marginTop: 8,
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#C2534C',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    marginBottom: 4,
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
  },
  backRightBtnRight: {
    backgroundColor: '#C2534C',
    right: 0,
  },
});
