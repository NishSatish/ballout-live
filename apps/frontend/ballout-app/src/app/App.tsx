import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './store/index';
import { SignUp } from '@ballout-app/src/app/screens/Auth/SignUp';
import { Provider as PaperProvider } from 'react-native-paper';
import { OpacityScreen } from '@ballout-app/src/app/components/OpacityScreen/OpacityScreen';
import { Login } from '@ballout-app/src/app/screens/Auth/Login';

export const App = () => {
  const Stack = createNativeStackNavigator();

  // Commented for testing :  <Stack.Screen name="SignUp" component={SignUp} />
  return (
    <Provider store={store}>
      <PaperProvider>
        <OpacityScreen />
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
};

export default App;
