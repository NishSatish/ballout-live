import { ISignUp } from '@ballout-app/src/app/models/signup.interface';
import { HttpWrapper } from '../../http.util';

export const signUpHelper = async (signUpDetails: ISignUp) => {
	try {
		console.log(signUpDetails);
		const { status, data } = await HttpWrapper.post<{
			message: string;
		}>('auth/signup', {
			firstName: signUpDetails.firstName,
			lastName: signUpDetails.lastName,
			email: signUpDetails.email,
			password: signUpDetails.password,
		});

		console.log('STATUS: ', status);
		console.log('DATA: ', data);

		//TODO: change to 200 after backend fix
		if (status === 201) {
			console.log('Redirect to main');
		} else {
			console.log('err logging in');
		}

		return status;
	} catch (e) {
		console.error('LOGIN HANDLER ERROR', e);
	}
};
