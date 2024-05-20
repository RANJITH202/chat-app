import api from './axios-base';
import axios from 'axios';
import { API_URLS, BASE_URL, resposeStatus } from './constants';
import makeToast from '../Toastr';

const loginApi = axios.create({
  baseURL: BASE_URL,
});

  export const login = async (data) => {
    try {
      const response = await loginApi.post(API_URLS.LOGIN, data);
      return response;
    } catch (error) {
      makeToast(resposeStatus.ERROR, 'Error logging in');
      console.error('Error logging in: ', error);
      throw error;
    }
  }
  
  export const getUsers = async () => {
    try {
      const response = await api.get(API_URLS.GET_ALL_USERS);
      return response;
    } catch (error) {
      makeToast(resposeStatus.ERROR, 'Error Registration');
      console.error('Error Registration: ', error);
      throw error;
    }
  }