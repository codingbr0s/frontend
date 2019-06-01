import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.VUE_APP_BACKEND_API_URL,
});

export enum URLS {
  authenticate = '/authenticate',
  invoice = '/invoice',
}

