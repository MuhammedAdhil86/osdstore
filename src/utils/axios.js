// 📁 src/utils/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'https://osdstore-seven.vercel.app/api',
  withCredentials: true,
});

// Refresh token on 401
API.interceptors.response.use(
  (res) => res,
  async (err) => {
    const originalRequest = err.config;
    if (err.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        await API.post('/users/refresh-token/');
        return API(originalRequest);
      } catch (refreshErr) {
        localStorage.removeItem('loggedIn');
        window.location.href = '/loginpage';
      }
    }
    return Promise.reject(err);
  }
);

export default API;
