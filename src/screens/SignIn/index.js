import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function SignIn() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000'}}>Ola SignIn</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
