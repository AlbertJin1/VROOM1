import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Landing from './Components/LandingPage/Landing';
import Continue from './Components/ContinuePage/Continue';
import Login from './Components/LoginPage/Login';
import Register from './Components/RegisterPage/Register';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>

        <Stack.Screen name="landing" component={Landing} />
        <Stack.Screen name="continue" component={Continue} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="register" component={Register} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
