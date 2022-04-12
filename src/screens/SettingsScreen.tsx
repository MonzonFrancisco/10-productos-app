import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colores } from '../theme/loginTheme';
import { StackScreenProps } from '@react-navigation/stack';


interface Props extends StackScreenProps<any, any>{}

export const SettingsScreen = ({navigation}: Props) => {


  return (
    <ScrollView>

        <View>
            <ImageBackground
            source={require('../assets/profile-screen-bg.png')}
            style={Settings.cajaMorada}
            />

            <Text style={Settings.title}>Configuración</Text>

            <TouchableOpacity
              onPress={() => navigation.navigate('ProtectedScreen')}
              activeOpacity={0.8}
              style={Settings.buttonback}
              >
                <Icon
                  color={Colores.secundary}
                  name="arrow-back-circle-outline"
                  size={40}
                />
              </TouchableOpacity>

        </View>

        <View style={Settings.cajatransp}></View>

        <View style={Settings.container}>

          <View style={{marginHorizontal: 75, marginTop: 25}}>
              <TouchableOpacity
                  onPress={()=> navigation.replace('LoginScreen')}
                  style={Settings.botonSetting}
                  >
                    <Icon
                      color={Colores.secundary}
                      name="language-outline"
                      size={25}
                      style={{marginVertical: 5}}
                    />
                    <Text style={{
                      color: Colores.secundary,
                      fontSize: 18}}>  Cambio de idioma
                    </Text>
              </TouchableOpacity>

              <TouchableOpacity
                  onPress={()=> navigation.replace('LoginScreen')}
                  style={Settings.botonSetting}
                  >
                    <Icon
                      color={Colores.secundary}
                      name="color-palette-outline"
                      size={25}
                      style={{marginVertical: 5}}
                    />
                    <Text style={{
                      color: Colores.secundary,
                      fontSize: 18}}>  Cambiar templete
                    </Text>
              </TouchableOpacity>

              <TouchableOpacity
                  onPress={()=> navigation.replace('LoginScreen')}
                  style={Settings.botonSetting}
                  >
                    <Icon
                      color={Colores.secundary}
                      name="log-out-outline"
                      size={25}
                      style={{marginVertical: 5}}
                    />
                    <Text style={{
                      color: Colores.secundary,
                      fontSize: 18}}>  Cerrar Sesión
                    </Text>
                </TouchableOpacity>
            </View>
        </View>

    </ScrollView>
  );
};

export default SettingsScreen;

const Settings = StyleSheet.create({
  container: {
    flex: 1,
    height: 500,
    backgroundColor: 'white',
    marginTop: -380,
    marginHorizontal: 15,
    borderRadius: 10,
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
  buttonback: {
    position: 'absolute',
    marginTop: 25,
    right: 15,
  },
  botonSetting: {
    backgroundColor: Colores.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    borderRadius: 100,
    marginBottom: 8,
    fontWeight: 'bold',
    marginVertical: 15,
  },
});
