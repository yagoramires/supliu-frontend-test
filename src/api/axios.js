import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://tiao.supliu.com.br/api/',
  timeout: 5000,
});
