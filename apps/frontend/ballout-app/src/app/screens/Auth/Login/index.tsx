import { Text, View } from 'react-native';
import { GlobalStyles } from '@ballout-app/src/app/globalStyles';
import { Navbar } from '@ballout-app/src/app/components/Navbar/index';
import { LoginStyles } from '@ballout-app/src/app/screens/Auth/Login/loginStyles';
import { InputBar } from '@ballout-app/src/app/components/InputBar/index';
import { useFontInComponent } from '@ballout-app/src/app/hooks/useFontInComponent';
import { CTA } from '@ballout-app/src/app/components/CTA/index';

const DummyHandleInputChange = (inp: string) => {
  // console.log(inp);
};

export const Login = () => {
  const fontLoaded = useFontInComponent(['Orbitron']);
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
          onChange={DummyHandleInputChange}
          autoCapitalize={'words'}
        />
        <InputBar
          placeholder="PASSWORD"
          onChange={DummyHandleInputChange}
          autoCapitalize={'words'}
        />
        <CTA text={'Login'} uppercase={true} />
      </View>
    </View>
  );
};
