import { Text, View } from 'react-native';
import { GlobalStyles } from '../../../globalStyles';
import { Navbar } from '../../../components/Navbar/index';
import { LoginStyles } from './loginStyles';
import { InputBar } from '../../../components/InputBar/index';
import { useFontInComponent } from '../../../hooks/useFontInComponent';
import { CTA } from '../../../components/CTA/index';
import { useState } from 'react';
import { ILogin } from '../../../models/login.interface';
import { loginHelper } from '../../../utils/auth/login';
import { useDispatch } from 'react-redux';
import {
  isValidEmail,
  isValidPassword,
} from '@ballout-app/src/app/utils/auth/validations';
import { Notifier, Easing, NotifierComponents } from 'react-native-notifier';

export const Login = () => {
  const fontLoaded = useFontInComponent(['Orbitron']);
  const [localLoginDetails, setLocalLoginDetails] = useState<ILogin>({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();

  const handleLogin = async (localLoginDetails: ILogin) => {
    const { email, password } = localLoginDetails;

    if (!isValidEmail(email)) {
      console.error('Invalid email');
      Notifier.showNotification({
        title: 'Invalid Email',
        description: 'Please Enter a valid email address',
        duration: 3000,
        Component: NotifierComponents.Alert,
        componentProps: {
          alertType: 'error',
        },
        showAnimationDuration: 800,
        showEasing: Easing.bounce,
        onHidden: () => console.log('Hidden'),
        onPress: () => console.log('Press'),
        hideOnPress: false,
      });
      return;
    }
    if (!isValidPassword(password)) {
      console.error('Invalid Password');
      Notifier.showNotification({
        title: 'Invalid Password',
        description:
          'Password must be at least 8 characters long and contain a number, a special character, and an uppercase letter.',
        duration: 300,
        Component: NotifierComponents.Alert,
        componentProps: {
          alertType: 'error',
        },
        showAnimationDuration: 800,
        showEasing: Easing.bounce,
        onHidden: () => console.log('Hidden'),
        onPress: () => console.log('Press'),
        hideOnPress: false,
      });
      return;
    }
    try {
      const result = await loginHelper(localLoginDetails, dispatch);
      if (result) {
        console.log('Login successful:', result);
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  function handleLoginInputChange(field: keyof ILogin, value: string) {
    setLocalLoginDetails((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  if (!fontLoaded) {
    return <Text>Font loading</Text>;
  }

  return (
    <View style={[GlobalStyles.screenBG]}>
      <Navbar />
      <Text style={[LoginStyles.loginHeader]}>Login</Text>
      <View style={[LoginStyles.inputContainer]}>
        <InputBar
          placeholder="EMAIL"
          onChange={(value) => handleLoginInputChange('email', value)}
          autoCapitalize={'none'}
        />
        <InputBar
          placeholder="PASSWORD"
          onChange={(value) => handleLoginInputChange('password', value)}
          autoCapitalize={'none'}
          password={true}
        />
        <CTA
          text={'Login'}
          uppercase={true}
          onPress={() => handleLogin(localLoginDetails)}
        />
      </View>
    </View>
  );
};
