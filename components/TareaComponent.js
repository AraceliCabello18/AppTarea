import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

export const TareaComponent = ({index,tarea,handelCambiar,handelEliminar}) => {
    const styles=StyleSheet.create({
        crad:{
            backgroundColor:`${tarea.realizado?'green':'#1ABC9C'}`,
            flexDirection:'column',
            borderColor:'black',
            width:'20%',
            left:'5%',
            height: '35%',
            borderRadius:'5%',
            alignItems:'center'
        },
        boton:{
            backgroundColor:`${tarea.realizado?'#F8333C':'#44AF69'}`,
            height:'20%',
            width:'50%',
            position: 'relative',
            borderRadius: '10%',
            top:'20%',
        },
        boton2:{
            backgroundColor:'#FCAB10',
            height:'20%',
            width:'50%',
            position: 'relative',
            borderRadius: '10%',
            top:'25%',
            alignItems:'center'
        }
    });
    return (
        <View style={styles.crad}>
            <Text style={{fontSize:30}}>
                Tarea: {index+1}
            </Text>
            <Text style={{fontSize:25}}>
                {tarea.descripcion}
            </Text>
            <Pressable onPress={()=>handelCambiar(tarea.id)} style={styles.boton}>
                <Text style={{fontSize:17,textAlign:'center'}}>
                    {tarea.realizado?'Marcar como Inconclusa':'Marcar como terminado'}
                </Text>
            </Pressable>
            <Pressable style={styles.boton2}>
                <Text onPress={()=>handelEliminar(tarea.id)} style={{fontSize:15, textAlign:'center'}}>
                    Borrar
                </Text>
            </Pressable>
        </View>
    )
}
