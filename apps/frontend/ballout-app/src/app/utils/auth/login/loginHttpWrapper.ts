import AsyncStorage from '@react-native-async-storage/async-storage';
import { Dispatch, UnknownAction } from '@reduxjs/toolkit';
import { ILogin } from '../../../models/login.interface';
import { IUser } from '../../../models/user.interface';
import { userActions } from '../../../store/user';
import { HttpWrapper } from '../../http.util';

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

		//TODO: change to 200 after backend fix
		if (status === 201) {
			await AsyncStorage.setItem('session_token', data.token);
			dispatch(
				userActions.loginUser({
					firstName: data.user.firstName,
					lastName: data.user.lastName,
					email: data.user.email,
				})
			);
		}

		return status;
	} catch (e) {
		console.error('LOGIN HANDLER ERROR', e);
	}
};
