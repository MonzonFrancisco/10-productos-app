import React, { useContext, useEffect } from 'react';
import { KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View, Keyboard, Alert } from 'react-native';
import { loginStyles } from '../theme/loginTheme';
import { WhiteLogo } from '../components/WhiteLogo';
import { useForm } from '../hooks/useForm';
import { StackScreenProps } from '@react-navigation/stack';
import { AuthContext } from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';


interface Props extends StackScreenProps<any, any>{}

 const RegistreScreen = ({navigation}: Props) => {

  const {signUp, errorMessage, removeError} = useContext(AuthContext);

    const {email, password, name, onChange} = useForm({
        name: '',
        email: '',
        password: '',
    });

    useEffect(() => {
      if (errorMessage.length === 0) return;
      Alert.alert('Registro Incorrecto', errorMessage, [{text: 'Ok', onPress: removeError}]);
      }, [errorMessage]);

    const onRegister = () => {
        console.log({email, password, name});
        Keyboard.dismiss();
        signUp({
          nombre: name,
          correo: email,
          password,
        });
    };

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

                  onChangeText={(value) => onChange(value, 'name')}
                  value={name}
                  onSubmitEditing={onRegister}

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

                  onChangeText={(value) => onChange(value, 'email')}
                  value={email}
                  onSubmitEditing={onRegister}

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

                  onChangeText={(value) => onChange(value, 'password')}
                  value={password}
                  onSubmitEditing={onRegister}

                  autoCapitalize="none"
                  autoCorrect={false}
                  />

              {/*Boton de registro */}
              <View style={loginStyles.botonConteiner}>
                <TouchableOpacity
                activeOpacity={0.8}
                style={loginStyles.button}
                onPress={onRegister}
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
                name="arrow-back-outline"
                size={30}
                />
              </TouchableOpacity>

        </View>

    </KeyboardAvoidingView>

    </>
  );
};

export default RegistreScreen;
