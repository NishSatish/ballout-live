export const MessagePatterns = {
	authentication: {
		getToken: 'AUTHENTICATION_GET_TOKEN',
		createUser: 'AUTHENTICATION_CREATE_USER',
		loginUser: 'AUTHENTICATION_LOGIN',
	},

	users: {
		getUsers: 'USERS_GET_USERS',
		me: 'USERS_GET_ME',
	},

	organizations: {
		createOrganization: 'ORGANIZATIONS_CREATE_ORGANIZATION',
		getOrganizations: 'ORGANIZATIONS_GET_ORGANIZATIONS',
	},
};
