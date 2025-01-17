import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './store/index';
import { Auth } from './screens/Auth';
import { Provider as PaperProvider } from 'react-native-paper';
import { OpacityScreen } from '@ballout-app/src/app/components/OpacityScreen/OpacityScreen';

export const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <PaperProvider>
        <OpacityScreen />
          <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Auth" component={Auth} />
            </Stack.Navigator>
          </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
};

export default App;
