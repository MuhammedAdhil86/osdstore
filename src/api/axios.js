// src/api.js
import axios from 'axios';
import Cookies from 'js-cookie';

const api = axios.create({
  baseURL: 'https://osdstore-seven.vercel.app/api',
  withCredentials: true, // Include cookies in requests
});

// Request interceptor to add access token to headers
api.interceptors.request.use(
  (config) => {
    const accessToken = Cookies.get('access_token');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor to handle token refresh
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      !originalRequest._retry &&
      Cookies.get('refresh_token')
    ) {
      originalRequest._retry = true;
      try {
        const response = await axios.post(
          'https://osdstore-seven.vercel.app/api/users/refresh-token/',
          {},
          { withCredentials: true }
        );
        const newAccessToken = response.data.access;
        Cookies.set('access_token', newAccessToken);
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return api(originalRequest);
      } catch (err) {
        // Refresh token is invalid or expired
        Cookies.remove('access_token');
        Cookies.remove('refresh_token');
        window.location.href = '/loginpage';
        return Promise.reject(err);
      }
    }
    return Promise.reject(error);
  }
);

export default api;
