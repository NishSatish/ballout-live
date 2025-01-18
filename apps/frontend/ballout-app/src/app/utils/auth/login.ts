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
    const loginResult = await HttpWrapper.post<{ token: string; user: IUser }>(
      'auth/login',
      {
        email: loginDetails.email,
        password: loginDetails.password,

        // email: 'ney@mar.com',
        // password: 'Neymar@1234',
      }
    );

    console.log(loginResult);

    await AsyncStorage.setItem('session_token', loginResult.token);

    dispatch(
      userActions.loginUser({
        firstName: loginResult.user.firstName,
        lastName: loginResult.user.lastName,
        email: loginResult.user.email,
      })
    );
    return loginResult;
  } catch (e) {
    console.error('LOGIN HANDLER ERROR', e);
  }
};
