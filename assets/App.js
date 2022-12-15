import { StatusBar } from 'react-native';
import react from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/routes'


export default function App() {

  return (
   <NavigationContainer>
    <StatusBar barStyle="dark-content"/>
    <Routes/>
   </NavigationContainer>
  );
};