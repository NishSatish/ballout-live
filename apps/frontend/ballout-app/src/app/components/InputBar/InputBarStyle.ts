import { StyleSheet } from 'react-native';

export const InputBarStyles = StyleSheet.create({
  InputBarContainer: {
    backgroundColor: '#373737',
    borderRadius: 15,
    padding: 20, // Increased padding for more space
    width:230,
    shadowColor: '#782063', // Dark pink shadow color
    shadowOffset: { width: 0, height: 2 }, // Vertical offset for the shadow
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 6,
    color: 'white',
  },
});

