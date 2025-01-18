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

export const Login = () => {
  const fontLoaded = useFontInComponent(['Orbitron']);
  const [localLoginDetails, setLocalLoginDetails] = useState<ILogin>({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();

  const handleLogin = async () => {
    const {email, password} = localLoginDetails;
    if ((email.length == 0) || (password.length == 0)) {
      console.error('Empty credentials');
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
        <CTA text={'Login'} uppercase={true} onPress={handleLogin} />
      </View>
    </View>
  );
};
