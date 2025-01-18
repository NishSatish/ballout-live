import { userActions, UserStore } from '../../store/user';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Dispatch, UnknownAction } from '@reduxjs/toolkit';
import { HttpWrapper } from '../http.util';
import { IUser } from '../../models/user.interface';
import { ILogin } from '../../models/login.interface';

export const loginHelper = async (
  loginDetails: ILogin,
  dispatch: Dispatch<UnknownAction>
) => {
  try {
    console.log(loginDetails);
    const { status, data } = await HttpWrapper.post<{
      token: string;
      user: IUser;
    }>('auth/login', {
      email: loginDetails.email,
      password: loginDetails.password,

      // email: 'ney@mar.com',
      // password: 'Neymar@1234',
    });

    console.log('STATUS: ', status);
    console.log('DATA: ', data);

    if (status === 401) {
      console.log('invalid creds');
      throw new Error('401 STATUS CODE');
    }

    if (status === 500) {
      console.log('server error');
      throw new Error('500 STATUS CODE');
    }

    await AsyncStorage.setItem('session_token', data.token);

    dispatch(
      userActions.loginUser({
        firstName: data.user.firstName,
        lastName: data.user.lastName,
        email: data.user.email,
      })
    );
    return data;
  } catch (e) {
    console.error('LOGIN HANDLER ERROR', e);
  }
};
