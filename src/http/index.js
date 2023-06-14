import axios from 'axios';
import {API_BASE_URL} from '../urls';

const $host = axios.create({
    baseURL: API_BASE_URL
});

const $authHost = axios.create({
    baseURL: API_BASE_URL
});

const authInterceptor = (config) => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
};

$authHost.interceptors.request.use(authInterceptor);

export {
    $host,
    $authHost
}
