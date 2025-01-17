import { Text, View } from 'react-native';
import { GlobalStyles } from '../../globalStyles';
import { Navbar } from '../../components/Navbar';
import { AuthStyles } from './authStyles';
import { InputBar } from '../../components/InputBar';
import { useFontInComponent } from '../../hooks/useFontInComponent';
import { CTA } from '../../components/CTA/index';

const DummyHandleInputChange = (inp: string) => {
  // console.log(inp);
};

export const Auth = () => {
  const fontLoaded = useFontInComponent(['Orbitron']);
  if (!fontLoaded) {
    return <Text>Font loading</Text>
  }

  return (
    <View style={[GlobalStyles.screenBG]}>
      <Navbar />
      <Text style={[AuthStyles.signupHeader]}>Create A User Account</Text>
      <View style={[AuthStyles.inputContainer]}>
        <InputBar
          placeholder="FIRST NAME"
          onChange={DummyHandleInputChange}
          autoCapitalize={'words'}
        />
        <InputBar
          placeholder="LAST NAME"
          onChange={DummyHandleInputChange}
          autoCapitalize={'words'}
        />
        <InputBar
          placeholder="EMAIL"
          onChange={DummyHandleInputChange}
        />
        <InputBar
          placeholder="PASSWORD"
          onChange={DummyHandleInputChange}
          password={true}
        />
        <InputBar
          placeholder="CONFIRM PASSWORD"
          onChange={DummyHandleInputChange}
          password={true}
        />

        <CTA text={'Signup'} uppercase={true} />
      </View>
    </View>
  );
};
