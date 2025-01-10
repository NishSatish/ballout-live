/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useRef, useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '@ballout-app/src/app/screens/Home';
import { NavigationContainer } from '@react-navigation/native';

export const App = () => {
  const [whatsNextYCoord, setWhatsNextYCoord] = useState<number>(0);
  const scrollViewRef = useRef<null | ScrollView>(null);

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
