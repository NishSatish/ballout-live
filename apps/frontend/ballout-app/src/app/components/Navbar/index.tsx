import { Image, SafeAreaView, View } from 'react-native';
import { styles } from './NavbarStyle';

export const Navbar = () => {
  return (
    <SafeAreaView>
      <View style={styles.nav}>
        <Image source={require('../../../../assets/LOGO.png')} />
      </View>
    </SafeAreaView>
  );
};
