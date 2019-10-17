// Start of the API

// Simulates connection to database
const users = [{ email: 'example@sample.test', password: 'pw' }]

function User(email, password, passwordConfirmation)
{
	this.emailExists = function (email)
	{
		for (i in users)
			if (users[i].email === email)
				return true
	  
		return false
	}

	this.getPassword = function (email)
	{
		for (i in users)
			if (users[i].email === email)
				return users[i].password
	  
		return { error: "incorporate some error handling" }
	}

	if (!new.target)
		return { error: 'This is a constructor.\nIt can only be used with the `new` keyword.' }
	
	if (this.emailExists(email))
		return { error: 'A user with this email already exists.' }
	
	if (password !== passwordConfirmation)
		return { error: 'The two passwords did not match.' }
	
	// Simulates INSERT to users table
	users.push({ email: email, password: password })
	
	this.email = email
	this.password = password

	this.signIn = function (email, password)
	{
		copyOfCurrentUser = this

		if (!this.emailExists(email))
		{
			console.log("No user account is attached to this email")
		}
		else if (this.getPassword(email) !== password)
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
	}

	this.signOut = function ()
	{
		copyOfCurrentUser = this

		if (!copyOfCurrentUser.signedIn)
		{
			console.log("This user is already signed out.")
		}
		else
			copyOfCurrentUser.signedIn = false
		
		return copyOfCurrentUser
	}

	this.changePassword = function (oldPassword, newPassword, newPasswordConfirmation)
	{
		copyOfCurrentUser = this

		if (copyOfCurrentUser.signed && copyOfCurrentUser.password === oldPassword && newPassword === newPasswordConfirmation)
		{
			copyOfCurrentUser.password = newPasswordConfirmation
		}

		return copyOfCurrentUser
	}

	return copyOfCurrentUser
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Example of how it would be implemented

user = new User("email from textbox", "pw", "pw")

if (!user.error)
{
	// do something
	user.signIn("email from textbox", "pw").signOut()
}