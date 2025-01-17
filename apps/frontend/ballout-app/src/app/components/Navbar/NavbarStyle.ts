import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  nav: {
    paddingTop: 30,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#373737',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  sav: {
    backgroundColor: '#373737',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20
  },
  logo: {
    height: '100%',
    width: '100%'
  },
  logoContainer: {
    height: 50,
    width: 130,
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  menuContainer: {
    height: 35,
    width: 35
  },
  menu: {
    height: '100%',
    width: '100%'
  }
});
