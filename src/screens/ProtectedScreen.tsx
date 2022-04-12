import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, ImageBackground, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colores } from '../theme/loginTheme';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any>{}

export const ProtectedScreen = ( {navigation}: Props ) => {

  return (

    <ScrollView>

        <View>
            <ImageBackground
            source={require('../assets/profile-screen-bg.png')}
            style={Dashboard.cajaMorada}
            />

            <Text style={Dashboard.title}>Dashboard</Text>

            <TouchableOpacity
              onPress={() => navigation.navigate('SettingsScreen')}
              activeOpacity={0.8}
              style={Dashboard.botonConfiguración}
              >
                <Icon
                  color={Colores.secundary}
                  name="settings-outline"
                  size={35}
                />
              </TouchableOpacity>

        </View>

        <View style={Dashboard.cajatransp}></View>

      <View style={Dashboard.container}>

            <View>
                <Text style={Dashboard.parrafos}>DATOS GENERALES</Text>

            </View>

            {/*Formulario del Dashboard */}

              <Text style={Dashboard.labelText}>ID Usuario:</Text>
                  <TextInput
                  style={Dashboard.inputText}
                  placeholderTextColor="rgba(255,255,255,0.4)"
                  underlineColorAndroid= {Colores.primary}
                  value="1"
                  editable={false}
                  selectTextOnFocus={false}
                  />
              <Text style={Dashboard.labelText}>Nombre Completo:</Text>
                  <TextInput
                  style={Dashboard.inputText}
                  placeholderTextColor="rgba(255,255,255,0.4)"
                  underlineColorAndroid= {Colores.primary}
                  value="Francisco Monzon Gallegos"
                  editable={false}
                  selectTextOnFocus={false}
                  />

              <Text style={Dashboard.labelText}>Celular:</Text>
                  <TextInput
                  style={Dashboard.inputText}
                  placeholderTextColor="rgba(255,255,255,0.4)"
                  keyboardType="name-phone-pad"
                  underlineColorAndroid= {Colores.primary}
                  value="9989394458"
                  editable={false}
                  selectTextOnFocus={false}
                  />

              <Text style={Dashboard.labelText}>Correo:</Text>
                  <TextInput
                  style={Dashboard.inputText}
                  placeholderTextColor= "rgba(255,255,255,0.4)"
                  keyboardType="email-address"
                  underlineColorAndroid= {Colores.primary}
                  value="gallefrancisco1997@gmail.com"
                  editable={false}
                  selectTextOnFocus={false}
                  />

              <Text style={Dashboard.labelText}>Link Vcard:</Text>
                  <TextInput
                  style={Dashboard.inputText}
                  placeholderTextColor="rgba(255,255,255,0.4)"
                  underlineColorAndroid= {Colores.primary}
                  editable={false}
                  selectTextOnFocus={false}
                  />

              <Text style={Dashboard.labelText}>Mi QR:</Text>
                  <TextInput
                  style={Dashboard.inputText}
                  placeholderTextColor="rgba(255,255,255,0.4)"
                  underlineColorAndroid= "transparent"
                  editable={false}
                  selectTextOnFocus={false}
                  />

        </View>
    </ScrollView>

  );
};

export default ProtectedScreen;


const Dashboard = StyleSheet.create({
  container: {
    flex: 1,
    height: 700,
    backgroundColor: 'white',
    marginTop: -380,
    marginHorizontal: 15,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'gray',
    marginBottom: 10,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
    position: 'absolute',
    top: 20,
    left: 15,
    justifyContent: 'space-evenly',
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
    marginTop: 20,
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  botonConfiguración: {
    position: 'absolute',
    marginTop: 25,
    right: 15,
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
});
