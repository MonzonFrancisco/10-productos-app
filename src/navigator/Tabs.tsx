import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProtectedScreen from '../screens/ProtectedScreen';
import { PerfilScreen } from '../screens/PerfilScreen';
import { Platform } from 'react-native';
import { Colores } from '../theme/loginTheme';
import { Productos } from '../screens/Productos';
import Icon from 'react-native-vector-icons/Ionicons';

export const Tabs = () => {
  return Platform.OS === 'ios'
  ? <TabsIos/>
  : <TabsAndroid/>
};

const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
    sceneAnimationEnabled={true}
    barStyle={{
      backgroundColor: Colores.primary,
    }}
    screenOptions={ ({ route }) => ({
      headerShown: false,
      tabBarActiveTintColor: Colores.primary,
      tabBarStyle: {
        borderTopWidth: 0,
        elevation: 0,
      },
      tabBarLabelStyle: {
        fontSize: 15,
      },
      tabBarIcon: ({color}) => {
        let iconName: string = '';
        switch (route.name) {
            case 'ProtectedScreen' :
                iconName = 'speedometer-outline';
            break;

            case 'PerfilScreen' :
                iconName = 'person-outline';
            break;

            case 'Productos' :
                iconName = 'file-tray-full-outline';
            break;
        }
        return <Icon name={ iconName } size={25} color={color}/>
      },
  })}
    >
      <BottomTabAndroid.Screen name="ProtectedScreen" options={{title: 'Dashboard'}} component={ProtectedScreen} />
      <BottomTabAndroid.Screen name="PerfilScreen" options={{title: 'Perfil'}} component={PerfilScreen} />
      <BottomTabAndroid.Screen name="Productos" component={Productos} />
    </BottomTabAndroid.Navigator>
  );
};


const BottomTabIos = createBottomTabNavigator();

 const TabsIos = () => {
  return (
    <BottomTabIos.Navigator
    sceneContainerStyle={{backgroundColor: Colores.primary}}
    screenOptions={ ({ route }) => ({
      headerShown: false,
      tabBarActiveTintColor: Colores.primary,
      tabBarStyle: {
        borderTopWidth: 0,
        elevation: 0,
      },
      tabBarLabelStyle: {
        fontSize: 15,
      },
      tabBarIcon: ({color}) => {
        let iconName: string = '';
        switch (route.name) {
            case 'ProtectedScreen' :
                iconName = 'speedometer-outline';
            break;

            case 'PerfilScreen' :
                iconName = 'person-outline';
            break;

            case 'Productos' :
                iconName = 'file-tray-full-outline';
            break;
        }
        return <Icon name={ iconName } size={20} color={color}/>
      },
  })}
    >
      <BottomTabIos.Screen name="ProtectedScreen" options={{title: 'Dashboard'}} component={ProtectedScreen} />
      <BottomTabIos.Screen name="PerfilScreen" options={{title: 'Perfil'}} component={PerfilScreen} />
      <BottomTabIos.Screen name="Productos" options={{title: 'Productos'}} component={Productos} />

    </BottomTabIos.Navigator>
  );
};
