import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

  opacityScreen: {
    backgroundColor: 'black',
    opacity: 0.5,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 10, // Below the sidebar, above the screen
  }
})
