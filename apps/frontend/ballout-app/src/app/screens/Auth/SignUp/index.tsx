import { CTA } from '@ballout-app/src/app/components/CTA/index';
import { InputBar } from '@ballout-app/src/app/components/InputBar/index';
import { Navbar } from '@ballout-app/src/app/components/Navbar/index';
import { GlobalStyles } from '@ballout-app/src/app/globalStyles';
import { useFontInComponent } from '@ballout-app/src/app/hooks/useFontInComponent';
import { ISignUp } from '@ballout-app/src/app/models/signup.interface';
import { SignUpStyles } from '@ballout-app/src/app/screens/Auth/SignUp/signUpStyles';
import {
	handleSignUpInputChange,
	handleSignUp,
} from '@ballout-app/src/app/utils/auth/signUp/signUpValidator';
import { useState } from 'react';
import { Text, View } from 'react-native';

export const SignUp = () => {
	const fontLoaded = useFontInComponent(['Orbitron']);
	const [localSignUpDetails, setLocalSignUpDetails] = useState<ISignUp>({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		confirmPassword: '',
	});

	if (!fontLoaded) {
		return <Text>Font loading</Text>;
	}

	return (
		<View style={[GlobalStyles.screenBG]}>
			<Navbar />
			<Text style={[SignUpStyles.signupHeader]}>Create A User Account</Text>
			<View style={[SignUpStyles.inputContainer]}>
				<InputBar
					placeholder="FIRST NAME"
					onChange={(value) =>
						handleSignUpInputChange('firstName', value, setLocalSignUpDetails)
					}
					autoCapitalize={'words'}
				/>
				<InputBar
					placeholder="LAST NAME"
					onChange={(value) =>
						handleSignUpInputChange('lastName', value, setLocalSignUpDetails)
					}
					autoCapitalize={'words'}
				/>
				<InputBar
					placeholder="EMAIL"
					onChange={(value) =>
						handleSignUpInputChange('email', value, setLocalSignUpDetails)
					}
					autoCapitalize={'words'}
				/>
				<InputBar
					placeholder="PASSWORD"
					onChange={(value) =>
						handleSignUpInputChange('password', value, setLocalSignUpDetails)
					}
					password={true}
				/>
				<InputBar
					placeholder="CONFIRM PASSWORD"
					onChange={(value) =>
						handleSignUpInputChange(
							'confirmPassword',
							value,
							setLocalSignUpDetails
						)
					}
					password={true}
				/>

				<CTA
					text={'Signup'}
					uppercase={true}
					onPress={() => handleSignUp(localSignUpDetails)}
				/>
			</View>
		</View>
	);
};
