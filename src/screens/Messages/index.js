import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, SafeAreaView, KeyboardAvoidingView, TextInput, View, Platform, TouchableOpacity } from 'react-native';

import Feather from 'react-native-vector-icons/Feather';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import ChatMessage from '../../components/ChatMessage';

export default function Messages({ route }) {
  const { thread } = route.params;
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const user = auth().currentUser.toJSON();

  useEffect(() => {
    const unsubscribeListener = firestore().collection('MESSAGE_THREADS')
      .doc(thread._id)
      .collection('MESSAGES')
      .orderBy('createdAt', 'desc')
      .onSnapshot(querySnapshot => {
        const messages = querySnapshot.docs.map(doc => {
          const firebaseData = doc.data();

          const data = {
            _id: doc.id,
            text: '',
            createdAt: firestore.FieldValue.serverTimestamp(),
            ...firebaseData
          }

          if (!firebaseData.system) {
            data.user = {
              ...firebaseData.user,
              name: firebaseData.user.displayName
            }
          }
          return data;
        })
        setMessages(messages);
      })

    return () => unsubscribeListener();

  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={{ width: '100%', marginTop: 6}}
        data={messages}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <ChatMessage data={item} />}
        showsHorizontalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ width: '100%' }}
        keyboardVerticalOffset={100} >
        <View style={styles.containerInput}>
          <View style={styles.mainContainerInput}>
            <TextInput
              style={styles.input}
              placeholder="Sua mensagem"
              value={input}
              onChangeText={(text) => setInput(text)} 
              multiline={true}
              autoCorrect={false}
              />
          </View>
          <View style={styles.containerButton}>
            <TouchableOpacity>
              <Feather name="send" size={22} color="#FFF"/>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c4c4'
  },
  containerInput: {
    flexDirection: 'row',
    margin: 10,
    alignItems: 'flex-end',
  },
  mainContainerInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    flex: 1,
    borderRadius: 25,
    marginRight: 10
  },
  input: {
    flex: 1,
    marginHorizontal: 10,
    maxHeight: 110,
    minHeight: 48
  },
  containerButton: {
    backgroundColor: '#51c880',
    height: 48,
    width: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25
  }
})