import { alertNotificationBuilder } from '@ballout-app/src/app/components/AlertNotifier';
import { ILogin } from '@ballout-app/src/app/models';
import { loginHelper } from '@ballout-app/src/app/utils/auth/login/loginHttpWrapper';
import {
	isValidEmail,
	isValidPassword,
} from '@ballout-app/src/app/utils/auth/validations';
import { Dispatch, UnknownAction } from '@reduxjs/toolkit';
import { AuthStatusCodes } from '@ballout/libs/commons/src';

export const handleLogin = async (
	localLoginDetails: ILogin,
	dispatch: Dispatch<UnknownAction>
) => {
	const { email, password } = localLoginDetails;

	if (!isValidEmail(email)) {
		console.error('Invalid email');
		alertNotificationBuilder({
			title: 'Invalid Email',
			description: 'Please Enter a valid email address',
		});
		return;
	}
	if (!isValidPassword(password)) {
		console.error('Invalid Password');
		alertNotificationBuilder({
			title: 'Invalid Password',
			description:
				'Password must be at least 8 characters long and contain a number, a special character, and an uppercase letter.',
		});
		return;
	}
	try {
		const status = await loginHelper(localLoginDetails, dispatch);

		if (status === AuthStatusCodes.login.success) {
			console.log('Login successful:', status);
			return;
		}

		// User not found is not an exception, so nothing thrown
		if (status === AuthStatusCodes.login.credentialsIncorrect) {
			console.log('Invalid credentials', status);
			alertNotificationBuilder({
				title: 'Invalid Credentials',
				description: '',
			});
		}

		// Leave for unforeseen errors
		if (status === 500) {
			console.log('Server Error', status);
			alertNotificationBuilder({
				title: 'Server Error',
				description: '',
			});
			throw new Error('500 Server Error');
		}
	} catch (error) {
		console.error('Login failed:', error);
	}
};

export const handleLoginInputChange = (
	field: keyof ILogin,
	value: string,
	setLocalLoginDetails: React.Dispatch<React.SetStateAction<ILogin>>
) => {
	setLocalLoginDetails((prev) => ({
		...prev,
		[field]: value,
	}));
};
