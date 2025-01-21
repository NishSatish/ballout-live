import { useState } from 'react';
import { Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { CTA } from '../../../components/CTA/index';
import { InputBar } from '../../../components/InputBar/index';
import { Navbar } from '../../../components/Navbar/index';
import { GlobalStyles } from '../../../globalStyles';
import { useFontInComponent } from '../../../hooks/useFontInComponent';
import { ILogin } from '../../../models/login.interface';
import { LoginStyles } from './loginStyles';
import { handleLogin } from '../../../utils/auth/login/loginValidator';

export const Login = () => {
  const fontLoaded = useFontInComponent(['Orbitron']);
  const [localLoginDetails, setLocalLoginDetails] = useState<ILogin>({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();

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
          onPress={() => handleLogin(localLoginDetails,dispatch)}
        />
      </View>
    </View>
  );
};
