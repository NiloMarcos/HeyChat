import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Messages({ route }) {

  const { thread } = route.params;

  return (
    <View style={styles.container}>
      <Text>Screen Messages</Text>
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