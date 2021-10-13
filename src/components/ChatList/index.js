import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function ChatList({ data }){
  return(
    <TouchableOpacity>
      <View style={styles.row}>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.nameRoom} numberOfLines={1}>{data.name}</Text>
          </View>

          <Text style={styles.contentText} numberOfLines={1}>{data.lastMessage.text}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(241, 240, 241, 0.5)',
    marginVertical: 4
  },
  content: {
    flexShrink: 1
  },
  header: {
    flexDirection: 'row',
  },
  nameRoom: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  contentText: {
    color: '#c1c1c1',
    fontSize: 16,
    marginTop: 2
  }
})