import { Text, View } from 'react-native';
import { GlobalStyles } from '../../globalStyles';
import { Navbar } from '../../components/Navbar';

export const Home = () => {
  return (
    <View style={[GlobalStyles.screenBG]}>
      <Navbar />
      <Text>Home</Text>
    </View>
  );
};
