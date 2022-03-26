import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import ProtectedScreen from '../screens/ProtectedScreen';
import { SettingsScreen } from '../screens/SettingsScreen';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="ProtectedScreen" component={ProtectedScreen} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};
