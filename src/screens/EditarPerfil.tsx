import React from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colores } from '../theme/loginTheme';
import { StackScreenProps } from '@react-navigation/stack';


interface Props extends StackScreenProps<any, any>{}

export const EditarPerfil = ({navigation}: Props) => {
  return (
    <View>

      <View style={Perfil.containerTitle}>
        <Text style={Perfil.title}>Editar Perfil</Text>
      </View>

        <View style={Perfil.Container}>
        <Text style={Perfil.labelText}>Nombre:</Text>
              <TextInput
              style={Perfil.inputText}
              placeholderTextColor="rgba(255,255,255,0.4)"
              underlineColorAndroid= {Colores.primary}
              value="Francisco"
              editable={false}
              selectTextOnFocus={false}
              />

        <Text style={Perfil.labelText}>Apellido paterno:</Text>
              <TextInput
              style={Perfil.inputText}
              placeholderTextColor="rgba(255,255,255,0.4)"
              underlineColorAndroid= {Colores.primary}
              value="Monzon"
              editable={false}
              selectTextOnFocus={false}
              />

        <Text style={Perfil.labelText}>Apellido materno:</Text>
              <TextInput
              style={Perfil.inputText}
              placeholderTextColor="rgba(255,255,255,0.4)"
              underlineColorAndroid= {Colores.primary}
              value="Gallegos"
              editable={false}
              selectTextOnFocus={false}
              />

          <Text style={Perfil.labelText}>Celular:</Text>
              <TextInput
              style={Perfil.inputText}
              placeholderTextColor="rgba(255,255,255,0.4)"
              keyboardType="name-phone-pad"
              underlineColorAndroid= {Colores.primary}
              value="9989394458"
              editable={false}
              selectTextOnFocus={false}
              />

          <Text style={Perfil.labelText}>Correo:</Text>
              <TextInput
              style={Perfil.inputText}
              placeholderTextColor= "rgba(255,255,255,0.4)"
              keyboardType="email-address"
              underlineColorAndroid= {Colores.primary}
              value="gallefrancisco1997@gmail.com"
              editable={false}
              selectTextOnFocus={false}
              />

          <Text style={Perfil.labelText}>Link Vcard:</Text>
              <TextInput
              style={Perfil.inputText}
              placeholderTextColor="rgba(255,255,255,0.4)"
              underlineColorAndroid= {Colores.primary}
              editable={false}
              selectTextOnFocus={false}
              />


            <View
            style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginHorizontal: 20,
            }}
            >
                  <TouchableOpacity
                  onPress={()=> navigation.replace('PerfilScreen')}
                  style={Perfil.botonGuardar}
                  >
                    <Icon
                      color={Colores.secundary}
                      name="save-outline"
                      size={25}
                    />
                    <Text style={{
                      color: Colores.secundary,
                      fontSize: 20,
                    }}> Guardar
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                  onPress={()=> navigation.replace('PerfilScreen')}
                  style={Perfil.botonDelete}
                  >
                    <Icon
                      color={Colores.secundary}
                      name="close-sharp"
                      size={25}
                    />
                    <Text style={{
                      color: Colores.secundary,
                      fontSize: 20}}> Cancelar
                    </Text>
                  </TouchableOpacity>
            </View>

      </View>

  </View>
  );
};

const Perfil = StyleSheet.create({
  containerTitle: {
    backgroundColor: Colores.primary,
    alignItems: 'center',
    padding: 12,
  },
  Container: {
    marginHorizontal: 10,
    marginVertical: 20,
  },
  title: {
    fontSize: 28,
    color: Colores.secundary,
    fontWeight: 'bold',
    },
  labelText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginHorizontal:25,
    marginTop: 1,
  },
  inputText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 25,
    backgroundColor: 'white',
    marginBottom: 1,
    color: 'gray',
  },
  botonGuardar: {
    backgroundColor: Colores.botonGuardar,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    borderRadius: 10,
    fontWeight: 'bold',
    marginTop: 15,
    flexDirection: 'row',
  },
  botonDelete: {
    backgroundColor: Colores.botondelete,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    borderRadius: 10,
    fontWeight: 'bold',
    marginTop: 15,
    flexDirection: 'row',
  },
});
