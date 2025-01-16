import { Text, View } from 'react-native';
import { GlobalStyles } from '../../globalStyles';
import { Navbar } from '../../components/Navbar';
import { AuthStyles } from './authStyles';
import { InputBar } from '../../components/InputBar';

const DummyHandleInputChange = (inp: string) => {
  // console.log(inp);
};

export const Auth = () => {
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
