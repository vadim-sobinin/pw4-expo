import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import SplashScreen from './src/screens/splash/SplashScreen';

import RegisterScreen from './src/screens/register/RegisterScreen';
import MainScreen from './src/screens/main/MainScreen';
import LoginScreen from './src/screens/login/LoginScreen';
import { AuthContext, AuthProvider } from './src/context/AuthContext';
import AppNav from './src/navigation/AppNav';
import AuthStack from './src/navigation/AuthStack';
import { NavigationContainer } from '@react-navigation/native';
import { ApolloProvider } from '@apollo/client';
import client from './src/apollo/client';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <AuthProvider>
      <ApolloProvider client={client}>
        <AppNav />
      </ApolloProvider>
    </AuthProvider>
  );
}
