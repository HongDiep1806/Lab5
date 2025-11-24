import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import AddService from './src/screens/AddService';
import DetailServiceScreen from './src/screens/DetailServiceScreen';
import UpdateService from './src/screens/UpdateService';
import { Provider as PaperProvider } from 'react-native-paper';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="AddService" component={AddService} />
          <Stack.Screen name="DetailService" component={DetailServiceScreen} />
          <Stack.Screen name="UpdateService" component={UpdateService} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
    </PaperProvider>
  );
}
