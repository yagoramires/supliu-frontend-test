import axios from 'axios';

const api = axios.create({
  baseURL: 'https://tiao.supliu.com.br/api/',
  timeout: 5000,
});

export default api;
