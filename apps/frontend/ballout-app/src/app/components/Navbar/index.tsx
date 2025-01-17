import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './NavbarStyle';
import React, { useState } from 'react';
import { Sidebar } from '@ballout-app/src/app/components/Sidebar/Sidebar';
import { useDispatch } from 'react-redux';
import { sidebarActions } from '@ballout-app/src/app/store/sidebar';
import { Portal } from 'react-native-paper';

export const Navbar = () => {
  const dispatch = useDispatch();

  const toggleSidebar = () => {
    dispatch(sidebarActions.toggleSidebar({}))
  }

  return (
    <View>
      <SafeAreaView style={styles.sav}>
        <View style={styles.nav}>
          <View style={styles.logoContainer}>
            <Image
              source={require('../../../../assets/LOGO.png')}
              style={styles.logo}
              resizeMode={'contain'}
            />
          </View>
          <TouchableOpacity
            style={styles.menuContainer}
            onPress={toggleSidebar}
          >
            <Image
              source={require('../../../../assets/MENU.png')}
              resizeMode={'contain'}
              style={styles.menu}
            />
          </TouchableOpacity>
        </View>
        <Portal>
          <Sidebar />
        </Portal>
      </SafeAreaView>
    </View>

  );
};
