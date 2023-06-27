import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useContext, useState } from 'react';
import Card from './Card';
import { ApolloError, useQuery } from '@apollo/client';
import { GET_FAVORITES, GET_POSTS } from '../../../apollo/requests';
import Spinner from '../../../ui/Spinner';
import { AuthContext } from '../../../context/AuthContext';
import { FavoritesData, Post, PostsReqData, User } from '../../../@types/types';
import NoFavorites from './NoFavorites';

const Favorites = () => {
  // @ts-ignore
  const { userToken } = useContext(AuthContext);

  const { loading, error, data, refetch } = useQuery<FavoritesData | undefined>(GET_FAVORITES, {
    variables: {
      input: {},
    },
    context: {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userToken}`,
      },
    },
    onCompleted(data) {
      console.log('Favorites fetched');
    },
  });

  if (loading || !data) {
    return <Spinner />;
  }

  if (error) {
    console.log(error);
  } else {
    if (data?.favouritePosts.data.length === 0) {
      return <NoFavorites>You haven't added anything to your favorites yet</NoFavorites>;
    } else {
      return (
        <View style={styles.container}>
          <FlatList
            style={styles.list}
            data={data.favouritePosts.data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Card data={item} />}
          />
        </View>
      );
    }
  }
};

export default Favorites;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  list: {
    // marginBottom: 80,
  },
});
