import { Text, View } from 'react-native';
import { GlobalStyles } from '../../globalStyles';
import { Navbar } from '../../components/Navbar';
import { AuthStyles } from './authStyles';
import { InputBar } from '../../components/InputBar';
import { useFonts } from 'expo-font';
import { useFontInComponent } from '@ballout-app/src/app/hooks/useFontInComponent';

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
      <View style={[AuthStyles.inputContainer]}>
        <Text style={[AuthStyles.signupHeader]}>Create A User Account</Text>
        <InputBar
          placeholder="FIRST NAME"
          onChange={DummyHandleInputChange}
        />
        <InputBar
          placeholder="LAST NAME"
          onChange={DummyHandleInputChange}
        />
        <InputBar
          placeholder="EMAIL"
          onChange={DummyHandleInputChange}
        />
        <InputBar
          placeholder="PASSWORD"
          onChange={DummyHandleInputChange}
        />
        <InputBar
          placeholder="CONFIRM PASSWORD"
          onChange={DummyHandleInputChange}
        />
      </View>
    </View>
  );
};
