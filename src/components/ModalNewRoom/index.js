import React, {useState} from 'react';
import { 
  Text, 
  View, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity, 
  TouchableWithoutFeedback,
  
} from 'react-native';

export default function ModalNewRoom({ setVisibile }){
  const [roomName, setRoomName] = useState('');
  
  return(
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={setVisibile}>
        <View style={styles.modal}></View>
      </TouchableWithoutFeedback>
    
    
      <View style={styles.modalContent}>
        <Text style={styles.title}>Criar um novo Grupo?</Text>

        <TextInput 
          placeholder="Qual o nome da sala" 
          value={roomName} 
          onChangeText={(text) => setRoomName(text)}
          style={styles.input}
        />

        <TouchableOpacity style={styles.btnCreate}>
          <Text style={styles.btnText}>Criar Sala</Text>
        </TouchableOpacity>
      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(34, 34, 34, 0.4)',
  },
  modal: {
    flex: 1,

  },
  modalContent: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 15,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  title: {
    marginTop: 14,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 19,
    color: '#000'
  },
  input: {
    borderRadius: 4,
    height: 45,
    backgroundColor: '#DDD',
    marginVertical: 15,
    fontSize: 16,
    paddingHorizontal: 5
  },
  btnCreate: {
    borderRadius: 4,
    backgroundColor: '#2e54d4',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnText: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#FFF'
  }
});