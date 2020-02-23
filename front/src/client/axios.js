const axios = require('axios');

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8081/',
});

axiosInstance.interceptors.request.use(
  (config) => {
    const instanceConfig = config;
    const user = localStorage.getItem('jwt');

    if (user) {
      instanceConfig.headers.Authorization = `bearer ${user}`;
    } else {
      instanceConfig.headers.Authorization = 'bearer here if jwt set';
    }

    return config;
  },
  error => Promise.reject(error),
);

export default axiosInstance;
