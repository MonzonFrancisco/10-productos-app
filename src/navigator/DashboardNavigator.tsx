import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProtectedScreen from '../screens/ProtectedScreen';
import SettingsScreen from '../screens/SettingsScreen';


const Stack = createStackNavigator();

export const DashboardNavigator = () => {
  return (
    <Stack.Navigator
    screenOptions={{
        headerShown: false,
        cardStyle: {
            backgroundColor: 'white',
        },
    }}
    >
          <Stack.Screen
          name="ProtectedScreen"
          component={ProtectedScreen}
          options={{title: 'Dashboard'}}
          />
          <Stack.Screen
          name="SettingsScreen"
          component={SettingsScreen}
          />
      </Stack.Navigator>
  );
};

