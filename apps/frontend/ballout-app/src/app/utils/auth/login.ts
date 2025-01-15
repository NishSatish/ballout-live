import { useDispatch } from 'react-redux';
import { userActions, UserStore } from '../../store/user';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Dispatch, UnknownAction } from '@reduxjs/toolkit';

export const loginHelper = async (dispatch: Dispatch<UnknownAction>) => {
  const SERVER_URL = 'http://localhost:3000/api/';
  try {
    const res = await fetch(SERVER_URL + 'auth/login', {
      body: JSON.stringify({
        email: 'ney@mar.com',
        password: 'Neymar@1234'
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });

    const result: {token: string, user: UserStore} = await res.json();

    await AsyncStorage.setItem('session_token', result.token);

    dispatch(userActions.loginUser({
      firstName: result.user.firstName,
      lastName: result.user.lastName,
      email: result.user.email
    }));
  } catch (e) {
    console.error('ERROR');
    return e;
  }

}
