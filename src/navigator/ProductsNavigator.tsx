import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Productos } from '../screens/Productos';
import { ProductScreen } from '../screens/ProductScreen';
import { Colores } from '../theme/loginTheme';
import { EditarProducto } from '../screens/EditarProducto';
import { AgregarProducto } from '../screens/AgregarProducto';



const Stack = createStackNavigator();



export const ProductsNavigator = () => {
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
          name="Productos"
          component={Productos}
          options={{title: 'Productos'}}
          />
          <Stack.Screen
          name="ProductScreen"
          component={ProductScreen}
          />
           <Stack.Screen
          name="EditarProducto"
          component={EditarProducto}
          />
          <Stack.Screen
          name="AgregarProducto"
          component={AgregarProducto}
          />
      </Stack.Navigator>
  );
};

