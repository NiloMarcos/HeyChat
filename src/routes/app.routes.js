import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from '../screens/SignIn';

const AppStack = createNativeStackNavigator();


export default function AppRoutes(){
  return(
    <AppStack.Navigator>
      <AppStack.Screen 
        name="SignIn" 
        component={SignIn}
        options={{
          title: 'Faca seu login'
        }}
        />
    </AppStack.Navigator>
  );
}