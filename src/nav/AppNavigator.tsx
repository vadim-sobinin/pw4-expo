import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import SplashPage from '../pages/splash/SplashPage';
import LoginPage from '../pages/login/LoginPage';

export default function AppNavigator() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Splash" component={SplashPage} />
      <Stack.Screen name="Login" component={LoginPage} />
    </Stack.Navigator>
  );
}
