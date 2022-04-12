import React from 'react';
import { Text, TextInput, View, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { Background } from '../components/Background';
import { WhiteLogo } from '../components/WhiteLogo';
import { loginStyles } from '../theme/loginTheme';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any>{}

 const LoginScreen = ({navigation}:  Props) => {

  return (
      <>
      {/*Background de la pantalla */}
      <Background/>

      <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={(Platform.OS === 'ios') ? 'padding' : 'height'}
      >

          <View style={loginStyles.formContainer}>
              {/*Logo */}
              <WhiteLogo/>

                {/*Formulario de login */}
                <Text style={loginStyles.title}>Login</Text>

                <Text style={loginStyles.label}>Email:</Text>
                    <TextInput
                    placeholder="Ingrese su correo electrónico"
                    placeholderTextColor="rgba(255,255,255,0.4)"
                    keyboardType="email-address"
                    underlineColorAndroid= "white"
                    style={loginStyles.inputField}
                    selectionColor="white"

                    value="prueba@gmail.com"

                    autoCapitalize="none"
                    autoCorrect={false}
                    />

                <Text style={loginStyles.label}>Password:</Text>
                    <TextInput
                    placeholder="********"
                    placeholderTextColor="rgba(255,255,255,0.4)"
                    underlineColorAndroid= "white"
                    style={loginStyles.inputField}
                    selectionColor="white"
                    secureTextEntry={true}

                    value="****"

                    autoCapitalize="none"
                    autoCorrect={false}
                    />

                {/*Boton de login */}
                <View style={loginStyles.botonConteiner}>
                  <TouchableOpacity
                  activeOpacity={0.8}
                  style={loginStyles.button}
                  onPress={()=> navigation.replace('Tabs')}
                  >
                    <Text style={loginStyles.buttonText}>Login</Text>
                  </TouchableOpacity>
                </View>

                {/*Crear nueva cuenta */}
                <View style={loginStyles.newUserContainer}>
                  <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={()=> navigation.replace('RegistreScreen')}
                  >
                    <Text style={loginStyles.buttonText}>Crear nueva cuenta </Text>
                  </TouchableOpacity>
                </View>
          </View>

      </KeyboardAvoidingView>

      </>


  );
};

export default LoginScreen;
