import { Image, SafeAreaView, Text, View } from 'react-native';
import { styles } from './NavbarStyle';
import { useEffect } from 'react';
import { loginHelper } from '@ballout-app/src/app/utils/auth/login';
import { useDispatch, useSelector } from 'react-redux';
import { UserStore } from '@ballout-app/src/app/store/user';

export const Navbar = () => {
  const dispatch = useDispatch();
  const userDetails = useSelector((state: any) => state.user);
  useEffect(() => {
    loginHelper(dispatch);
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.nav}>
        <Image source={require('../../../../assets/LOGO.png')} />
      </View>
    </SafeAreaView>
  );
};
