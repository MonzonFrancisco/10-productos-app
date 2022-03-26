import React from 'react';
import { Text, View, StyleSheet, ScrollView, Image, ImageBackground } from 'react-native';
import { Colores } from '../theme/loginTheme';


export const PerfilScreen = () => {
  return (
    <ScrollView>

        <View>
            <ImageBackground
            source={require('../assets/profile-screen-bg.png')}
            style={styles.cajaMorada}
            />
            <Text style={styles.title}>Perfil</Text>
        </View>

        <View style={styles.cajatransp}>

        </View>

        <View style={styles.container}>

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

            <Text style={styles.parrafos}>Francisco Monzon Gallegos, 25</Text>
            <Text style={styles.parrafos}>Cancún, México</Text>

            
        </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: 500,
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
      right: 160,
      left: 160,
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
    },
});
