export const AuthStatusCodes = {
	login: {
		success: 200,
		credentialsMissing: 400,
		credentialsIncorrect: 401,
		userDenied: 403,
		loginRateLimit: 429,
	},

	signup: {
		success: 201,
		credentialsMissing: 400,
		// Applies to conflicting emails,
		// invalid formats, etc.
		credentialsInvalid: 403,
	},
};
