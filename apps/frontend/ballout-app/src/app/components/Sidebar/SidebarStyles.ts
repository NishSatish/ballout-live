import { StyleSheet } from 'react-native';
import { navBg } from '../../globalStyles';

export const styles = StyleSheet.create({
  sidebarContainer: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: '70%',
    height: '100%',
    backgroundColor: navBg,
    zIndex: 20
  }
});
