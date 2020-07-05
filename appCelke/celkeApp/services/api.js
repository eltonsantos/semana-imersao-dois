import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.1.85:8080/homeapp'
});

export default api;