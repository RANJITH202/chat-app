export const BASE_URL = 'http://localhost:3001/api';

export const API_URLS = {
    LOGIN: '/user/login',
    REGISTER: '/user/register',
    GET_ALL_USERS: '/user',
    GET_USER_BY_ID: '/user/getUserById',
    GET_SIDEBAR_MESSAGES: '/messages/getSideBarMessagesById',
    GET_MESSAGES_BY_USERS: '/messages/getMessagesByUsers',
    ADD_MESSAGES: '/messages/addMessage',

}

export const responseStatus = {
    SUCCESS: 'success',
    FAILURE: 'failure',
    ERROR: 'error',
} 

export const localStorageKey = {
    TOKEN: 'accessToken',
    USER_ID: 'userId',
}