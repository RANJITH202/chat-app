import api from './axios-base';
import axios from 'axios';
import { API_URLS, BASE_URL, responseStatus } from './constants';
import makeToast from '../Toastr';

const loginApi = axios.create({
  baseURL: BASE_URL,
});

  export const login = async (data) => {
    try {
      const response = await loginApi.post(API_URLS.LOGIN, data);
      return response;
    } catch (error) {
      makeToast(responseStatus.ERROR, 'Error logging in');
      console.error('Error logging in: ', error);
    }
  }
  
  export const getUsers = async () => {
    try {
      const response = await api.get(API_URLS.GET_ALL_USERS);
      return response;
    } catch (error) {
      makeToast(responseStatus.ERROR, 'Error Registration');
      console.error('Error Registration: ', error);
    }
  }
  export const getUserByID = async (id) => {
    try {
      const response = await api.get(`${API_URLS.GET_USER_BY_ID}/?id=${id}`);
      return response;
    } catch (error) {
      makeToast(responseStatus.ERROR, 'Error Registration');
      console.error('Error Registration: ', error);
    }
  }

  // Message API
  export const getSideMessages = async (id) => {
    try{
      const response = await api.get(`${API_URLS.GET_SIDEBAR_MESSAGES}/?id=${id}`);
      return response;
    } catch (error) {
      makeToast(responseStatus.ERROR, 'Error fetching messages');
      console.error('Error fetching messages: ', error);
    }
  };

  export const addMessages = async (data) => {
    try{
      const response = await api.post(`${API_URLS.ADD_MESSAGES}`, data);
      return response;
    } catch (error) {
      makeToast(responseStatus.ERROR, 'Error while Adding messages');
      console.error('Error while Adding messages: ', error);
    }
  };

  export const getMessagesByUsers = async (userId, participantId) => {
    try{
      const response = await api.get(`${API_URLS.GET_MESSAGES_BY_USERS}/?userId=${userId}&receiverId=${participantId}`);
      return response;
    } catch (error) {
      makeToast(responseStatus.ERROR, 'Error fetching messages');
      console.error('Error fetching messages: ', error);
    }
  };