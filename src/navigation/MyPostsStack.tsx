import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FullPost from '../screens/main/componets/FullPost';

import MyPosts from '../screens/main/componets/MyPosts';
import CreatePost from '../screens/main/componets/CreatePost';
import CreatePostStack from './CreatePostStack';

const Stack = createNativeStackNavigator();

const MyPostsStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="CreatePostStack" component={CreatePostStack} />
      <Stack.Screen name="FullCard" component={FullPost} />
    </Stack.Navigator>
  );
};

export default MyPostsStack;
