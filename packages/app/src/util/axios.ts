import axios from 'axios';
import { url } from '../config';

export const axiosInstance = axios.create({
  baseURL: url.api,
});
