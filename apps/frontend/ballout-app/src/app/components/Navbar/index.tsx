import { Image, SafeAreaView, Text, View } from 'react-native';
import { styles } from './NavbarStyle';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export const Navbar = () => {
  return (
    <SafeAreaView>
      <View style={styles.nav}>
        <Image source={require('../../../../assets/LOGO.png')} />
      </View>
    </SafeAreaView>
  );
};
