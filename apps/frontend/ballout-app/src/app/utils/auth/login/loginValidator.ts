import { alertNotificationBuilder } from '@ballout-app/src/app/components/AlertNotifier';
import { ILogin } from '@ballout-app/src/app/models';
import { loginHelper } from '@ballout-app/src/app/utils/auth/login/loginHttpWrapper';
import {
	isValidEmail,
	isValidPassword,
} from '@ballout-app/src/app/utils/auth/validations';
import { Dispatch, UnknownAction } from '@reduxjs/toolkit';

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
		const result = await loginHelper(localLoginDetails, dispatch);
		if (result) {
			console.log('Login successful:', result);
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
