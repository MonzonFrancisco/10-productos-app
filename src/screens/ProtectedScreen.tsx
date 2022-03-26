import React, { useContext } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colores } from '../theme/loginTheme';


export const ProtectedScreen = () => {

  const {user, token, logOut} = useContext(AuthContext);

  return (

      <View style={styles.container}>
          <Text style={styles.title}>Dashboard</Text>

          <TouchableOpacity
            onPress={logOut}
            style={{
              backgroundColor: 'white',
              flexDirection: 'row',
              alignItems: 'center',
               borderWidth: 2,
               borderColor: 'white',
               paddingHorizontal: 20,
               paddingVertical: 5,
               borderRadius: 100,
            }}
            >
              <Icon
                color={Colores.primary}
                name="log-out-outline"
                size={25}
              />
              <Text style={{
                color: Colores.primary,
                fontSize: 18}}>  Cerrar Sesión
              </Text>

            </TouchableOpacity>
        <Text style={{color: 'black'}}>
          {JSON.stringify(user, null, 5)}
        </Text>
      </View>
  );
};

export default ProtectedScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 20,
      marginBottom: 20,
    },
});
