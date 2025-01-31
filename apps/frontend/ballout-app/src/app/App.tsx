import { OpacityScreen } from '@ballout-app/src/app/components/OpacityScreen/OpacityScreen';
import { SignUp } from '@ballout-app/src/app/screens/Auth/SignUp';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NotifierWrapper } from 'react-native-notifier';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { store } from './store/index';

export const App = () => {
	const Stack = createNativeStackNavigator();

	// Commented for testing: <Stack.Screen name="Login" component={Login} />
	return (
		<Provider store={store}>
			<PaperProvider>
				<GestureHandlerRootView>
					<NotifierWrapper>
						<OpacityScreen />
						<NavigationContainer>
							<Stack.Navigator screenOptions={{ headerShown: false }}>
								<Stack.Screen name="SignUp" component={SignUp} />
							</Stack.Navigator>
						</NavigationContainer>
					</NotifierWrapper>
				</GestureHandlerRootView>
			</PaperProvider>
		</Provider>
	);
};

export default App;
