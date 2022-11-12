import api from './axiosConfig'

export const registerApi = (data) => {
	return api.post('/auth/register', data)
}

export const loginApi = (data) => {
	return api.post('/auth/login', data)
}
