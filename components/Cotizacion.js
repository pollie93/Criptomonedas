import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Cotizacion = ({resultado}) => {

    if(Object.keys(resultado).length === 0 ) /*p comprobar si obj vacio o tiene algo */ return null;

    return (
        <View style={styles.resultado}>
            <Text style={[styles.texto, styles.precio]}>
                <Text style={styles.span}>{resultado.PRICE} </Text>
            </Text>
            <Text style={styles.texto}>Precio mas alto del día: {' '}
                <Text style={styles.span}> {resultado.HIGHDAY} </Text>
            </Text>
            <Text style={styles.texto}>Precio mas bajo del día: {' '}
                <Text style={styles.span}> {resultado.LOWDAY} </Text>
            </Text>
            <Text style={styles.texto}>Variación últimas 24 horas: {' '}
                <Text style={styles.span}> {resultado.CHANGEPCT24HOUR} % </Text>
            </Text>
            <Text style={styles.texto}>Última actualización: {' '}
                <Text style={styles.span}> {resultado.LASTUPDATE} </Text>
            </Text>

        </View>
    );
}

const styles = StyleSheet.create({
    resultado: {
        backgroundColor: '#5E49E2',
        padding: 20
    },
    texto: {
        color: '#FFF',
        fontFamily: 'Lato-Regular',
        fontSize: 18,
        marginBottom: 10
    },
    precio: {
        color: '#FFF',
        fontFamily: 'Lato-Regular',
        marginBottom: 10,
        fontSize: 38
    },
    span: /*no existe en las app moviles el span, pero aca fx como uno */ {
        fontFamily: 'Lato-Black'
    }
})

export default Cotizacion; 