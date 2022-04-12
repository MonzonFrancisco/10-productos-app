import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colores } from '../theme/loginTheme';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any>{}

export const Productos = ({navigation}: Props) => {
  return (
<View style={{flex: 1}}>

    <View style={{
      backgroundColor: Colores.primary,
      alignItems: 'center',
      padding: 12}}>
       <Text style={{
         fontSize: 28,
         color: Colores.secundary,
         fontWeight: 'bold',
        }}>Productos</Text>
    </View>

      <View style={stylesProduct.Container}>
        <TouchableOpacity
         activeOpacity={0.4}
         onPress={()=> navigation.navigate('ProductScreen')}
        >
                  <Text
                  style={stylesProduct.title}
                  >
                    <Icon
                    color={Colores.secundary}
                    name="clipboard"
                    size={20}
                    /> Terrenos
                  </Text>
              </TouchableOpacity>
      </View>

      <View style={stylesProduct.Container}>
        <TouchableOpacity
         activeOpacity={0.4}
         onMagicTap={()=> navigation.navigate('ProductScreen')}
        >
                  <Text
                  style={stylesProduct.title}
                  >
                    <Icon
                    color={Colores.secundary}
                    name="car-sport"
                    size={25}
                    />  Autos
                  </Text>
              </TouchableOpacity>
      </View>

      <View style={stylesProduct.Container}>
        <TouchableOpacity
         activeOpacity={0.4}
         onPress={()=> navigation.navigate('ProductScreen')}
        >
                  <Text
                  style={stylesProduct.title}
                  >
                    <Icon
                    color={Colores.secundary}
                    name="business"
                    size={20}
                    /> Inmobiliario
                  </Text>
              </TouchableOpacity>
      </View>

          <TouchableOpacity
            activeOpacity={0.4}
            onPress={()=> navigation.navigate('AgregarProducto')}
            style={stylesProduct.botonAgregar}
          >
              <Icon
              color="green"
              name="add-circle-sharp"
              size={60}
              />
          </TouchableOpacity>


</View>
  );
};

const stylesProduct = StyleSheet.create({
    Container: {
      backgroundColor: Colores.primary,
      marginHorizontal: 70,
      marginTop: 30,
      borderRadius: 20,
      padding: 20,
      alignItems: 'center',
      opacity: 0.8,
    },
    title: {
      fontSize: 22,
      color: Colores.secundary,
    },
    botonAgregar: {
      position: 'absolute',
      right: 15,
      bottom: 15,
    },
});
