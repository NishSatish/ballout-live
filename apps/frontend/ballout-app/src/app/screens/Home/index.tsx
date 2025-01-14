import { Text, View } from 'react-native';
import { GlobalStyles } from '../../globalStyles';
import { Navbar } from '../../components/Navbar';
import { useEffect, useState } from 'react';
import { loginHelper } from '@ballout-app/src/app/utils/auth/login';

export const Home = () => {
  return (
    <View style={[GlobalStyles.screenBG]}>
      <Navbar />
      <Text>Home</Text>
    </View>
  );
};
