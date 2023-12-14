import { StyleSheet, View } from 'react-native';
import { HeaderComponent } from './components/HeaderComponent';
import { FormularioComponent } from './components/FormularioComponent';
import { useReducer, useState } from 'react';
import { tareaReducer } from './reducers/tareaReducer';
import { TareaComponent } from './components/TareaComponent';

export default function App() {
  const init = () => [];
  const [tarea, setTarea] = useState('');
  const [tareas, dispatch] = useReducer(tareaReducer, [], init)
  const handleTarea = (tarea) => {
    if (tarea) {
      const tareanueva = {
        id: new Date().getTime(),
        descripcion: tarea,
        realizado: false
      }
      const action = {
        type: "agregar",
        payload: tareanueva
      }
      dispatch(action);
    } else {
      console.log('ingresa algo');
    }
    setTarea('');
  }
  const handelCambiar = (id) => {
    dispatch({
      type: "cambiar",
      payload: id
    })
  }
  const handelEliminar = (id) => {
    dispatch({
      type: "borrar",
      payload: id
    })
  }
  return (
    <View style={styles.container}>
      <View style={styles.contenedor1}>
        <HeaderComponent />
      </View>
      <View style={styles.contenedor2}>
        <FormularioComponent handleTarea={handleTarea} tarea={tarea} setTarea={setTarea} />
        {
          tareas.map((tarea, index) => {
            return <TareaComponent key={index} tarea={tarea} index={index} handelCambiar={handelCambiar} handelEliminar={handelEliminar}/>
          })
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contenedor1: {
    flex: .3,
    backgroundColor: 'red',
  },
  contenedor2: {
    flex: 1,
    backgroundColor: 'blue',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10
  }
});



