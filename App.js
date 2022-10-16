import { StatusBar } from 'expo-status-bar';
import {Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './views/Home';
import Login from './views/Login';
import Registro from './views/Registro';
import Perfil from './views/Perfil';

export default function App() {

  const Stack = createStackNavigator();

  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home}
          options={{
            headerShown:false
          }} 
          />
          <Stack.Screen name="Login" component={Login}
          options={{
            headerShown:false
          }}  />
          <Stack.Screen name="Registro" component={Registro}
          options={{
            headerShown:false
          }}  />
          <Stack.Screen name="Perfil" component={Perfil}
          options={{
            headerShown:false
          }}  />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

