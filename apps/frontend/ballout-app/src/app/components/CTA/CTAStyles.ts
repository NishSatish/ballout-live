import { StyleSheet } from 'react-native';

export const CTAStyles = StyleSheet.create({
  btnText: {
    color: 'white',
    fontFamily: 'Montserrat',
    fontWeight: '600',
    fontSize: 20
  },

  gradient: {
    minWidth: 150,
    minHeight: 40,
    backgroundColor: 'red',
    padding: 7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    position: 'relative',
  },
  arrow: {
    height: '60%',
    width: 25,
  }
});
