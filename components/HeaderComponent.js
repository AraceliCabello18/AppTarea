import { StyleSheet, Text, View } from "react-native"

import React from 'react'

export const HeaderComponent = () => {
    return (
        
            <View style={styles.fila}>
                <View style={styles.columna}>
                    <Text style={{ fontSize: 60, color: 'white' }}>Lista de tareas</Text>
                    <Text style={{ fontSize: 40, color: 'white' }}>Copia de tareas app</Text>
                </View>
            </View>
        
    )
}

const styles = StyleSheet.create({
    
    fila: {
        flexDirection: 'column',
        alignItems:"center",
        backgroundColor: '#3498DB',
        flexWrap: 'wrap'
    },
    columna: {
        flexDirection: 'column',
        alignItems: 'center',
        textAlign:'center'
    }
})