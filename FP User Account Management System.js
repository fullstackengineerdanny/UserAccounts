// Start of the API

const api = (function ()
{
	const user = {}
	// simulates database
	const users = new Map([['example@sample.test', 'pw']])

	return {
		signUp: function (email, password, passwordConfirmation)
		{
			if (users.get(email))
			{
				console.log("A user is already associated with this email.")
			}
			else if (password !== passwordConfirmation)
			{
				console.log("The passwords did not match.")
			}
			else
			{
				user.email = email
				user.password = password
				// Simulate INSERT to the table
				users.set(email, password)
			}

			return user
		},
		
		signIn: function (user, email, password)
		{
			copyOfCurrentUser = user

			if (!users.get(email))
			{
				console.log("No user account is attached to this email")
			}
			else if (users.get(email) !== password)
			{
				console.log("Incorrect password")
			}
			else
			{
				copyOfCurrentUser.email = email
				copyOfCurrentUser.password = password
				copyOfCurrentUser.signedIn = true
			}

			return copyOfCurrentUser
		},

		signOut: function (user)
		{
			copyOfCurrentUser = user

			if (!copyOfCurrentUser.signedIn)
			{
				console.log("This user is already signed out.")
			}
			else
				copyOfCurrentUser.signedIn = false
			
			return copyOfCurrentUser
		},
	
		changePassword: function (user, oldPassword, newPassword, newPasswordConfirmation)
		{
			copyOfCurrentUser = user

			if (copyOfCurrentUser.signed && copyOfCurrentUser.password === oldPassword && newPassword === newPasswordConfirmation)
			{
				copyOfCurrentUser.password = newPasswordConfirmation
			}

			return copyOfCurrentUser
		}
	}
})()

////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////

// Sample Implementation
danny = api.signUp("dbetancourt@talentpath.com", "example", "example")
danny = api.signOut(api.signIn(danny, "dbetancourt@talentpath.com", "example"))