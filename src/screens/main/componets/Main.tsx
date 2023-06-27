import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useContext, useState } from 'react';
import Card from './Card';
import Sort from './Sort';
import { ApolloError, useQuery } from '@apollo/client';
import { GET_POSTS } from '../../../apollo/requests';
import Spinner from '../../../ui/Spinner';
import { AuthContext } from '../../../context/AuthContext';
import { Post, PostsReqData, User } from '../../../@types/types';

const Main = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  // @ts-ignore
  const { userToken } = useContext(AuthContext);

  const { loading, error, data, refetch } = useQuery<PostsReqData | undefined>(GET_POSTS, {
    variables: {
      input: {
        type: selectedIndex ? 'TOP' : 'NEW',
      },
    },
    context: {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userToken}`,
      },
    },
  });

  const filterCanged = (index: number) => {
    setSelectedIndex(index), refetch();
  };

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    console.log(error);
  } else {
    return (
      <View style={styles.container}>
        <Sort selectedIndex={selectedIndex} setSelectedIndex={filterCanged} />

        <FlatList
          style={styles.list}
          data={data?.posts.data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Card data={item} />}
        />
      </View>
    );
  }
};

export default Main;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  list: {
    marginBottom: 50,
  },
});
