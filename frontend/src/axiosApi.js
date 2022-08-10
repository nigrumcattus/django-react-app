import axios from 'axios';

axios.defaults.withCredentials = true;

const axiosInstance = axios.create({
	baseURL: 'http://localhost:8000',
	timeout: 60000,
	header: {
         'X-Requested-With': 'XMLHttpRequest', 
		'Content-Type': 'application/json',
		'accept': 'application/json',
		'Access-Control-Allow-Origin': '*', 
	}
});

export default axiosInstance;
