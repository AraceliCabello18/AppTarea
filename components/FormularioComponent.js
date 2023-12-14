import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'

export const FormularioComponent = ({handleTarea,tarea,setTarea}) => {
    
    return (
        <View style={styles.card}>
            <Text style={{fontSize:40}}>
                Agregar Tarea
            </Text>
            <TextInput onChangeText={setTarea} value={tarea} style={styles.imput}/>
            <Pressable style={styles.boton} onPress={()=>handleTarea(tarea)}>
                <Text style={styles.textoBoton}>
                    Agregar
                </Text>
            </Pressable>
        </View>
    )
}
const styles=StyleSheet.create({
    card:{
        flexDirection:'column',
        backgroundColor:'#BB8FCE',
        borderColor:'black',
        width:'30%',
        left:'2%',
        height: '45%',
        borderRadius:'5%',
        alignItems:'center'
    },
    imput:{
        backgroundColor:'white',
        borderWidth: 1,
        padding: 10,
        height:'20%',
        width:'70%',
        position: 'relative',
        top:'10%'
    },
    boton:{
        backgroundColor:'#8A4FFF',
        height:'20%',
        width:'30%',
        position: 'relative',
        borderRadius: '10%',
        top:'20%',

    },
    textoBoton:{
        fontSize:30,
        
        textAlign:'center'
    }
})
