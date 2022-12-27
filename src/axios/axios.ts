import axios from 'axios'

export const getContentType = () => ({
	'Content-Type': 'application/json',
})

export const axiosClassic = axios.create({
	baseURL: process.env.APP_SERVER_URL,
	headers: getContentType(),
})

