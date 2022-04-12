import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import RegistreScreen from '../screens/RegistreScreen';
import { Tabs } from './Tabs';

const Stack = createStackNavigator();

export const Navigator = () => {


  return (
    <Stack.Navigator
    screenOptions={{
        headerShown: false,
        cardStyle: {
            backgroundColor: 'white',
        },
    }}
    >
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegistreScreen" component={RegistreScreen} />
          <Stack.Screen name="Tabs" component={Tabs} />

    </Stack.Navigator>
  );
};
