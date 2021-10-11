import React, {useState} from 'react';
import {
  SafeAreaView, 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  Modal,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import FabButton from '../../components/FabButton';
import ModalNewRoom from '../../components/ModalNewRoom';

import auth from '@react-native-firebase/auth';

import { useNavigation } from '@react-navigation/native';

export default function ChatRoom() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  
  function handleSignOut(){
    auth()
    .signOut()
    .then(() => {
      navigation.navigate('SignIn');
    })
    .catch(() => {
      console.log('Nao possui user');
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerRoom}>
        <View style={styles.headerRoomLeft}>
          <TouchableOpacity onPress={() => handleSignOut()}>
            <MaterialIcons name="arrow-back" size={28} color="#FFF" />
          </TouchableOpacity>
          <Text style={styles.title}>Grupos</Text>
        </View>

        <TouchableOpacity>
          <MaterialIcons name="search" size={28} color="#FFF" />
        </TouchableOpacity>
      </View>

      <FabButton 
        setVisibile={() => setModalVisible(true)}
      />
      
      <Modal visible={modalVisible} animationType="fade" transparent={true} >
        <ModalNewRoom setVisibile={() => setModalVisible(false)} />
      </Modal>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerRoom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#2e54d4',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  headerRoomLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFFFFF',
    paddingLeft: 10,
  }
})