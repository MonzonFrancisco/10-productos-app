import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ProductsNavigator } from './ProductsNavigator';
import { Platform } from 'react-native';
import { Colores } from '../theme/loginTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import { DashboardNavigator } from './DashboardNavigator';
import { PerfilNavigator } from './PerfilNavigator';

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
            case 'DashboardNavigator' :
                iconName = 'speedometer-outline';
            break;

            case 'PerfilNavigator' :
                iconName = 'person-outline';
            break;

            case 'ProductsNavigator' :
                iconName = 'file-tray-full-outline';
            break;
        }
        return <Icon name={ iconName } size={25} color={color}/>
      },
  })}
    >
      <BottomTabAndroid.Screen name="DashboardNavigator" options={{title: 'Dashboard'}} component={DashboardNavigator} />
      <BottomTabAndroid.Screen name="PerfilNavigator" options={{title: 'Perfil'}} component={PerfilNavigator} />
      <BottomTabAndroid.Screen name="ProductsNavigator" options={{title: 'Productos'}} component={ProductsNavigator} />

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

            case 'PerfilNavigator' :
                iconName = 'person-outline';
            break;

            case 'DashboardNavigator' :
                iconName = 'file-tray-full-outline';
            break;
        }
        return <Icon name={ iconName } size={20} color={color}/>
      },
  })}
    >
      <BottomTabIos.Screen name="DashboardNavigator" options={{title: 'Dashboard'}} component={DashboardNavigator} />
      <BottomTabIos.Screen name="PerfilNavigator" options={{title: 'Perfil'}} component={PerfilNavigator} />
      <BottomTabAndroid.Screen name="ProductsNavigator" options={{title: 'Productos'}} component={ProductsNavigator} />

    </BottomTabIos.Navigator>
  );
};
