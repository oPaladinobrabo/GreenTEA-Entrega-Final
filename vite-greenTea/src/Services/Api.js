import axios from 'axios';

const Api = axios.create({
	baseURL: 'https://localhost:44300/api'
})

export default Api;