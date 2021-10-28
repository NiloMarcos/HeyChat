import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, Keyboard, FlatList } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

import ChatList from '../../components/ChatList';

import { useIsFocused } from '@react-navigation/native';

export default function Search() {
  const isFocused = useIsFocused();
  const [input, setInput] = useState('');
  const [user, setUser] = useState(null);
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const hasUser = auth().currentUser ? auth().currentUser.toJSON() : null;

    setUser(hasUser);
  }, [isFocused]);

  async function handleSearch(){
    if(input === '') return;

    const responseSearch = await firestore()
    .collection('MESSAGE_THREADS')
    .where('name', '>=', input)
    .where('name', '<=', input + '\uf8ff')
    .get()
    .then((querySnapshot) => {
      const threads = querySnapshot.docs.map((documentSnapshot) => {
        return{
          _id: documentSnapshot.id,
          name: '',
          lastMessage: { text: ''},
          ...documentSnapshot.data()
        }
      })

      setChats(threads)
      console.log(threads)
      setInput('');
      Keyboard.dismiss();
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerInput}>
        <TextInput 
          placeholder="Digite o nome da sala!" 
          value={input} 
          onChangeText={(text) => setInput(text)}
          style={styles.input}
          autoCapitalize={"none"}
        />
        <TouchableOpacity style={styles.buttonSearch} onPress={() => handleSearch()}>
          <MaterialIcons name="search" size={30} color="#FFF" />
        </TouchableOpacity>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false} 
        data={chats}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <ChatList data={item} userStatus={user} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  containerInput: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginVertical: 14,
  },
  input: {
    backgroundColor: '#C4C4C4',
    marginLeft: 10,
    height: 50,
    width: '80%',
    borderRadius: 4,
    padding: 10
  },
  buttonSearch: {
    backgroundColor: '#2e54d4',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    width: '15%',
    marginLeft: 5,
    marginRight: 10
  }
})