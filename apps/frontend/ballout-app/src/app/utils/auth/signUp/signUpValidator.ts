import { alertNotificationBuilder } from '@ballout-app/src/app/components/AlertNotifier';
import { ISignUp } from '@ballout-app/src/app/models/signup.interface';
import { isEmpty, isValidEmail, isValidPassword } from '../validations';
import { signUpHelper } from './signUpHttpWrapper';

export const handleSignUp = async (localSignUpDetails: ISignUp) => {
	const { firstName, lastName, email, password } = localSignUpDetails;
	console.log('enootu', isEmpty(firstName));
	if (isEmpty(firstName)) {
		console.error('first name empty');
		alertNotificationBuilder({
			title: 'Please fill first name',
			description: '',
		});
		return;
	}

	if (isEmpty(lastName)) {
		console.error('last name empty');
		alertNotificationBuilder({
			title: 'Please fill last name',
			description: '',
		});
		return;
	}

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
	if (localSignUpDetails.password != localSignUpDetails.confirmPassword) {
		console.error('Passwords do not match');
		alertNotificationBuilder({
			title: 'Passwords do not match',
			description: '',
		});
		return;
	}
	try {
		const status = await signUpHelper(localSignUpDetails);

		if (status === 201) {
			console.log('SignUp successful:', status);
			return;
		}

		if (status === 500) {
			console.log('Server Error', status);
			alertNotificationBuilder({
				title: 'Server Error',
				description: '',
			});
			throw new Error('500 Server Error');
		} else {
			console.log('sign up error status code:', status);
		}
	} catch (error) {
		console.error('Login failed:', error);
	}
};

export const handleSignUpInputChange = (
	field: keyof ISignUp,
	value: string,
	setLocalSignUpDetails: React.Dispatch<React.SetStateAction<ISignUp>>
) => {
	setLocalSignUpDetails((prev) => ({
		...prev,
		[field]: value,
	}));
};
