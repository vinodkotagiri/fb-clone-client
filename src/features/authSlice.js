import { createSlice } from '@reduxjs/toolkit'
const initialState = {
	user: null,
	token: null,
	isLoggedIn: false,
}
export const authSlice = createSlice({
	name: 'auth',
	initialState,

	reducers: {
		login: (state, action) => {
			state.user = action.payload.user
			state.token = action.payload.token
			state.isLoggedIn = true
			localStorage.setItem('auth', { user: state.user, token: state.token, isLoggedIn: true })
		},
		logout: (state) => {
			state.user = null
			state.token = null
			state.isLoggedIn = false
			localStorage.clear()
		},
	},
})
export const { login, logout } = authSlice.actions
export default authSlice.reducer
