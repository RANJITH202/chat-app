import axios from 'axios';
import { BASE_URL, localStorageKey, resposeStatus } from './constants';
import makeToast from '../Toastr';

const api =  axios.create({
  baseURL: BASE_URL,
});

// Request interceptor for adding the bearer token
api.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem(localStorageKey.TOKEN); // Assuming you store the token in localStorage
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
    // Token Referesh have to be handled.
    makeToast(resposeStatus.ERROR, 'Login Again to continue');
    console.log("Interceptors Response error => ", error);
    return Promise.reject(error);
  }
);
export default api;