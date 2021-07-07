import axios from 'axios';
// import {BASE_URL} from '@env';

export const instanceAdcom = axios.create({
  baseURL: 'https://atlasfunds.com.pk', //dev url
});
