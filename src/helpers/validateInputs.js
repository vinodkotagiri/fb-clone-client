export function ValidateEmail(email) {
	let msg = null
	const pattern =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	if (!email.toString().match(pattern)) msg = 'Enter a valid email address'
	else msg = null
	return msg
}
export function ValidatePassword(password) {
	const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
	if (!password.match(pattern))
		return 'Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters'
	else return null
}
