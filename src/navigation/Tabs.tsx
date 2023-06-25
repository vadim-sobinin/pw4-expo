import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainPage from '../pages/main/MainPage';
import Main from '../pages/main/componets/Main';
import { Icon } from '@rneui/themed';

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
            tabBarAccessibilityLabel: 'Main page',
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" size={size} type="ionicon" color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={Main}
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
          component={Main}
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
