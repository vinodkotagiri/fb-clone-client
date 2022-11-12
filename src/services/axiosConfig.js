import axios from 'axios'
const BASE_URL = process.env.REACT_APP_API
const api = axios.create({
	baseURL: BASE_URL,
	headers: {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
	},
})
export default api
