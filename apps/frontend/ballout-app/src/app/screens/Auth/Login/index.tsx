import { Text, View } from 'react-native';
import { GlobalStyles } from '@ballout-app/src/app/globalStyles';
import { Navbar } from '@ballout-app/src/app/components/Navbar/index';
import { LoginStyles } from '@ballout-app/src/app/screens/Auth/Login/loginStyles';
import { InputBar } from '@ballout-app/src/app/components/InputBar/index';
import { useFontInComponent } from '@ballout-app/src/app/hooks/useFontInComponent';
import { CTA } from '@ballout-app/src/app/components/CTA/index';
import { useState } from 'react';

interface ILogin {
  email: string;
  password: string;
}

export const Login = () => {
  const fontLoaded = useFontInComponent(['Orbitron']);
  const [localLoginDetails, setLocalLoginDetails] = useState<ILogin>({
    email: '',
    password: '',
  });

  const handleLogin = () => {
    console.log('Login button clicked!', localLoginDetails);
    // Perform authentication logic here
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
