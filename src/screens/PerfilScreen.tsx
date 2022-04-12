import React from 'react';
import { Text, View, StyleSheet, ScrollView, Image, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { Colores } from '../theme/loginTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any>{}


export const PerfilScreen = ({navigation}: Props) => {
  return (
    <ScrollView>

        <View>
            <ImageBackground
            source={require('../assets/profile-screen-bg.png')}
            style={Perfil.cajaMorada}
            />
            <Text style={Perfil.title}>Perfil</Text>

            <TouchableOpacity
              onPress={() => navigation.navigate('EditarPerfil')}
              activeOpacity={0.8}
              style={Perfil.botonConfiguracion}
              >
                <Icon
                  color={Colores.secundary}
                  name="create-outline"
                  size={35}
                />
              </TouchableOpacity>
        </View>

        <View style={Perfil.cajatransp}>
        </View>

        <View style={Perfil.container}>

            <View style={{
              justifyContent: 'center',
              alignItems: 'center',
              }}>
            <Image
            source={require('../assets/profile-img.png')}
            style={{
              position: 'relative',
                width: 110,
                height: 100,
                borderRadius: 100,
                marginTop: -50,
            }}
            />
            </View>

            <Text style={Perfil.parrafos}>Francisco Monzon Gallegos, 25</Text>
            <Text style={Perfil.parrafos}>Cancún, México</Text>


            <View style={Perfil.buttonRedesContainer}>
              <TouchableOpacity
              style={Perfil.buttonRedesStyle}
              >
                  <Text
                  style={{
                    fontSize: 20,
                    marginHorizontal: 10,
                    marginVertical: 5,
                    color: Colores.secundary,
                  }}
                  >
                    <Icon
                    color={Colores.secundary}
                    name="logo-whatsapp"
                    size={20}
                    /> WhatsApp
                  </Text>
              </TouchableOpacity>

              <TouchableOpacity
              style={Perfil.buttonRedesStyle}
              >
                  <Text
                  style={{
                    fontSize: 20,
                    marginHorizontal: 10,
                    marginVertical: 5,
                    color: Colores.secundary,
                  }}
                  >
                    <Icon
                    color={Colores.secundary}
                    name="mail-outline"
                    size={20}
                    /> Contacto
                  </Text>
              </TouchableOpacity>

            </View>

            <View style={Perfil.containerInfo}>

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
            </View>


        </View>

    </ScrollView>
  );
};

const Perfil = StyleSheet.create({
    container: {
      flex: 1,
      height: 800,
      backgroundColor: 'white',
      marginTop: -350,
      marginHorizontal: 25,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: 'gray',
      marginBottom: 10,
    },
    title: {
      fontSize: 35,
      fontWeight: 'bold',
      color: 'white',
      position: 'absolute',
      top: 20,
      left: 25,
      alignItems: 'center',
    },
    cajaMorada: {
      width: '100%',
      height: 400,
      backgroundColor: Colores.primary,
      alignItems: 'center',
    },
    cajatransp: {
      width: '100%',
      height: 80,
      backgroundColor: Colores.primary,
      opacity: 0.4,
    },
    parrafos: {
      fontSize: 18,
      color: 'black',
      textAlign: 'center',
      marginTop: 10,
    },
    buttonRedesContainer: {
      marginHorizontal: 25,
      marginTop: 25,
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
    buttonRedesStyle: {
      flexDirection: 'row',
      borderWidth: 1,
      borderColor: Colores.primary,
      borderRadius: 10,
      backgroundColor: Colores.primary,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 5,
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
    containerInfo: {
      marginTop: 25,
    },
    botonConfiguracion: {
      position: 'absolute',
      marginTop: 25,
      right: 15,
    },
});
