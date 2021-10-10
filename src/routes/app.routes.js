import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from '../screens/SignIn';
import ChatRoom from '../screens/ChatRoom';
import Messages from '../screens/Messages';
import Search from '../screens/Search';

const AppStack = createNativeStackNavigator();


export default function AppRoutes(){
  return(
    <AppStack.Navigator initialRouteName="ChatRoom">
      <AppStack.Screen 
        name="SignIn" 
        component={SignIn}
        options={{
          title: 'Faca seu login'
        }}
        />
      <AppStack.Screen 
        name="ChatRoom" 
        component={ChatRoom}
        options={{
          headerShown: false,
        }}
        />
    </AppStack.Navigator>
  );
}