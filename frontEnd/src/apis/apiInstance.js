import axios from 'axios';

const apiInstance = axios.create({
  baseURL: 'http://localhost:4000',
  headers: {
    'Content-Type': 'application/json',
  },
});

apiInstance.interceptors.response.use((res) => {
  return res.data;
});

apiInstance.interceptors.request.use((config) => {
  return config;
});

export default apiInstance;
