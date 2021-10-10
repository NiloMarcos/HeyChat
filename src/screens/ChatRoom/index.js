import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function ChatRoom() {
  const navigtion = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Screen ChatRoom</Text>
      <Button title="Login" onPress={() => navigtion.navigate('SignIn')}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})