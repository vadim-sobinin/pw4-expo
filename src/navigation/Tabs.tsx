import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from '../screens/main/MainScreen';
import Main from '../screens/main/componets/Main';
import { Icon } from '@rneui/themed';
import Favorites from '../screens/main/componets/Favorites';
import NoFavorites from '../screens/main/componets/NoFavorites';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Group
        screenOptions={{
          headerShown: false,
          tabBarLabelStyle: styles.tab,
          tabBarActiveTintColor: '#87B71F',
          tabBarInactiveTintColor: '#DEDEDE',
          tabBarStyle: styles.container,
        }}>
        <Tab.Screen
          name="Main"
          component={Main}
          options={{
            tabBarLabel: 'Main',
            tabBarAccessibilityLabel: 'Main Screen',
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" size={size} type="ionicon" color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={Favorites}
          options={{
            tabBarLabel: 'Favorites',
            tabBarAccessibilityLabel: 'Favorites',
            tabBarIcon: ({ color, size }) => (
              <Icon name="bookmark" size={size} type="ionicon" color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="My posts"
          component={NoFavorites}
          options={{
            tabBarLabel: 'My posts',
            tabBarAccessibilityLabel: 'My posts',
            tabBarIcon: ({ color, size }) => (
              <Icon name="image" size={size} type="ionicon" color={color} />
            ),
          }}
        />
      </Tab.Group>
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  container: {
    paddingTop: 12,
    minHeight: 55,
  },
  tab: {
    fontSize: 12,
  },
});
