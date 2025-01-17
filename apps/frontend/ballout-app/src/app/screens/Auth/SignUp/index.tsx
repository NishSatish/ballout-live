import { Text, View } from 'react-native';
import { GlobalStyles } from '@ballout-app/src/app/globalStyles';
import { Navbar } from '@ballout-app/src/app/components/Navbar/index';
import { SignUpStyles } from '@ballout-app/src/app/screens/Auth/SignUp/signUpStyles';
import { InputBar } from '@ballout-app/src/app/components/InputBar/index';
import { useFontInComponent } from '@ballout-app/src/app/hooks/useFontInComponent';
import { CTA } from '@ballout-app/src/app/components/CTA/index';

const DummyHandleInputChange = (inp: string) => {
  // console.log(inp);
};

export const SignUp = () => {
  const fontLoaded = useFontInComponent(['Orbitron']);
  if (!fontLoaded) {
    return <Text>Font loading</Text>;
  }

  return (
    <View style={[GlobalStyles.screenBG]}>
      <Navbar />
      <Text style={[SignUpStyles.signupHeader]}>Create A User Account</Text>
      <View style={[SignUpStyles.inputContainer]}>
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
        <InputBar placeholder="EMAIL" onChange={DummyHandleInputChange} />
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
