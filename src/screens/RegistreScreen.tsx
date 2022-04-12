import React from 'react';
import { KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { loginStyles } from '../theme/loginTheme';
import { WhiteLogo } from '../components/WhiteLogo';
import { StackScreenProps } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';


interface Props extends StackScreenProps<any, any>{}

 const RegistreScreen = ({navigation}: Props) => {

  return (
    <>

    <KeyboardAvoidingView
    style={{flex: 1, backgroundColor: '#5856D6'}}
    behavior={(Platform.OS === 'ios') ? 'padding' : 'height'}
    >

        <View style={loginStyles.formContainer}>
            {/*Logo */}
            <WhiteLogo/>

              {/*Formulario de login */}
              <Text style={loginStyles.title}>Registro</Text>

              <Text style={loginStyles.label}>Nombre:</Text>
                  <TextInput
                  placeholder="Ingrese su nombre"
                  placeholderTextColor="rgba(255,255,255,0.4)"
                  underlineColorAndroid= "white"
                  style={loginStyles.inputField}
                  selectionColor="white"

                  value=""

                  autoCapitalize="words"
                  autoCorrect={false}
                  />

              <Text style={loginStyles.label}>Email:</Text>
                  <TextInput
                  placeholder="Ingrese su correo electrónico"
                  placeholderTextColor="rgba(255,255,255,0.4)"
                  keyboardType="email-address"
                  underlineColorAndroid= "white"
                  style={loginStyles.inputField}
                  selectionColor="white"

                  value=""

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

                  value=""

                  autoCapitalize="none"
                  autoCorrect={false}
                  />

              {/*Boton de registro */}
              <View style={loginStyles.botonConteiner}>
                <TouchableOpacity
                activeOpacity={0.8}
                style={loginStyles.button}
                onPress={()=> navigation.replace('Tabs')}
                >
                  <Text style={loginStyles.buttonText}>Crear Cuenta</Text>
                </TouchableOpacity>
              </View>

              {/*Boton de regresar */}
              <TouchableOpacity
              onPress={()=> navigation.replace('LoginScreen')}
              activeOpacity={0.8}
              style={loginStyles.buttonReturn}
              >
                 <Icon
                color="white"
                name="arrow-back-circle-outline"
                size={45}
                />
              </TouchableOpacity>

        </View>

    </KeyboardAvoidingView>

    </>
  );
};

export default RegistreScreen;
