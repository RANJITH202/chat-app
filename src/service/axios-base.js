import axios from 'axios';
import { BASE_URL, localStorageKey, responseStatus } from './constants';
import makeToast from '../Toastr';

const api =  axios.create({
  baseURL: BASE_URL,
});

// Request interceptor for adding the bearer token
api.interceptors.request.use(
  (config) => {
    const token = localStorageKey.getItem(localStorageKey.TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Token Refresh have to be handled.
    makeToast(responseStatus.ERROR, 'Login Again to continue');
    console.log("Interceptors Response error => ", error);
    return Promise.reject(error);
  }
);
export default api;