import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Colores } from '../theme/loginTheme';
import { PerfilScreen } from '../screens/PerfilScreen';
import { EditarPerfil } from '../screens/EditarPerfil';



const Stack = createStackNavigator();



export const PerfilNavigator = () => {
  return (
      <Stack.Navigator
      screenOptions={{
        headerShown: false,
          cardStyle:{
              backgroundColor: Colores.secundary,
          },
      }}
      >
          <Stack.Screen
          name="PerfilScreen"
          component={PerfilScreen}
          />
          <Stack.Screen
          name="EditarPerfil"
          component={EditarPerfil}
          />
      </Stack.Navigator>
  );
};

