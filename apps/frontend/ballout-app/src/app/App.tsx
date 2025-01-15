/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useRef, useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '@ballout-app/src/app/screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './store/index';
import { Auth } from './screens/Auth';

export const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Auth" component={Auth} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
