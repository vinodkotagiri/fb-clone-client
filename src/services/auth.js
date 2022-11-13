import api from './axiosConfig'

export const postLogin = (data) => {
	return api.post('/login', data)
}
export const postRegister = (data) => {
	return api.post('/register', data)
}
