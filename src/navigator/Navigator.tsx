import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthContext } from '../context/AuthContext';
import LoginScreen from '../screens/LoginScreen';
import RegistreScreen from '../screens/RegistreScreen';
import { Tabs } from './Tabs';
import { LoadingScreen } from '../screens/LoadingScreen';

const Stack = createStackNavigator();

export const Navigator = () => {

  const {status} = useContext(AuthContext);

  if ( status === 'checking' ) return <LoadingScreen/>

  return (
    <Stack.Navigator
    screenOptions={{
        headerShown: false,
        cardStyle: {
            backgroundColor: 'white',
        },
    }}
    >
      {
      (status !== 'authenticated')
      ? (
        <>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegistreScreen" component={RegistreScreen} />
        </>
      )
      : (
        <Stack.Screen name="Tabs" component={Tabs} />
      )
      }
    </Stack.Navigator>
  );
};
