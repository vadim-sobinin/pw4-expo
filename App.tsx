import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import SplashPage from './src/pages/splash/SplashPage';
import LoginPage from './src/pages/login/LoginPage';
import RegisterPage from './src/pages/register/RegisterPage';
import MainPage from './src/pages/main/MainPage';

export default function App() {
  return <MainPage />;
}
