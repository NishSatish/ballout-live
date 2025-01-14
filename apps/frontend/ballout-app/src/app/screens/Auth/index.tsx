import { Text, View } from 'react-native';
import { GlobalStyles } from '../../globalStyles';
import { Navbar } from '../../components/Navbar';
import { AuthStyles } from './authStyles';
import { InputBar } from '../../components/InputBar';
const DummyHandleInputChange = ({ inp }: { inp: string }) => {
  console.log(inp);
};

export const Auth = () => {
  return (
    <View style={[GlobalStyles.screenBG]}>
      <Navbar />
      <View style={[AuthStyles.inputContainer]}>
        <Text style={{ color: 'white',fontSize:25, marginTop:40, marginBottom:20}}>Create A User Account</Text>
        <InputBar
          placeholder="FIRST NAME"
          text=""
          onChange={DummyHandleInputChange}
        />
        <InputBar
          placeholder="LAST NAME"
          text=""
          onChange={DummyHandleInputChange}
        />
        <InputBar
          placeholder="EMAIL"
          text=""
          onChange={DummyHandleInputChange}
        />
        <InputBar
          placeholder="PASSWORD"
          text=""
          onChange={DummyHandleInputChange}
        />
        <InputBar
          placeholder="CONFIRM PASSWORD"
          text=""
          onChange={DummyHandleInputChange}
        />
      </View>
    </View>
  );
};
