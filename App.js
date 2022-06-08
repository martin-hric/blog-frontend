import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './app/components/StackNavigator';
import ObjectToString from "./app/components/stringify";

global.API_URL = 'http://127.0.0.1:3000';
global.globalQuerryStorage = [];

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
