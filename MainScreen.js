

import * as React from 'react';
import { View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MytyStack from './Screens/Navigation/MytyStack';
import { useEffect } from 'react';
import * as Notifications from 'expo-notifications';
import { Notify } from './Screens/Navigation/Notify';










const Stack = createNativeStackNavigator();

function MainScreen() {
  

  




  return (
    <NavigationContainer>
    
  <MytyStack  screenOptions={{
    headerShown: false
  }}/>

     {/* {
        token === null ?
          <mainStack /> : <AppStack />
      } */}




    </NavigationContainer>
  );
}

export default MainScreen;