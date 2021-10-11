import React from 'react';
import Icon from 'react-native-vector-icons/Feather'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function FabButton({ setVisibile, userStatus }){

  const navigation = useNavigation();

  function handleNavigateButton(){
    userStatus ? setVisibile() : navigation.navigate('SignIn');
  };

  return(
    <TouchableOpacity 
      style={styles.containerButton} 
      activeOpacity={0.7} 
      onPress={() => handleNavigateButton()}
      >
      <View>
        <Icon 
          name="plus" 
          size={25} 
          color="#FFF" 
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  containerButton: {
    backgroundColor: '#2e54d4',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: '5%',
    right: '6%',

  }
})