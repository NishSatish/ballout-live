import { userActions, UserStore } from '../../store/user';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Dispatch, UnknownAction } from '@reduxjs/toolkit';
import { HttpWrapper } from '../http.util';
import { IUser } from '../../models/user.interface';
import { ILogin } from '@ballout-app/src/app/models/';

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
    console.error('ERROR', e);
  }
};
