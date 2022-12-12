import apiInstance from './apiInstance';

export const authApi = {
  Login: (data) => {
    return apiInstance.post('/auth/login', data);
  },
  Register: (data) => {
    return apiInstance.post('/auth/register', data);
  },
};
