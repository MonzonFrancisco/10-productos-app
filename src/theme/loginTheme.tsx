import { StyleSheet } from 'react-native';

export const Colores = {
    primary: '#5856D6',
    secundary: 'white',
    botonGuardar: 'green',
    botondelete: 'red',
};

 export const loginStyles = StyleSheet.create({
    formContainer: {
        flex: 1,
        paddingHorizontal: 30,
        justifyContent: 'center',
        height: 600,
        marginBottom: 50,
    },
    title:{
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 20,
    },
    label: {
        color: 'white',
        marginTop: 25,
        fontWeight: 'bold',
    },
    inputField: {
        color: 'white',
        fontSize: 20,
    },
    botonConteiner: {
        alignItems: 'center',
        marginTop: 50,
    },
    button: {
        borderWidth: 2,
        borderColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 100,
    },
    buttonText:{
        color: 'white',
        fontSize: 18,
    },
    newUserContainer:{
        alignItems: 'flex-end',
        marginTop: 10,
        color: 'white',
    },
    buttonReturn: {
        position: 'absolute',
        top: 25,
        left: 20,
    },
});
