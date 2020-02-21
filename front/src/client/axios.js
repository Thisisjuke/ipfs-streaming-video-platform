const axios = require('axios');

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8081/',
});

axiosInstance.interceptors.request.use(
    config => {
      const user = localStorage.getItem('jwt');

      if (user) {
        config.headers["Authorization"] = "bearer " + user;
      } else {
        config.headers["Authorization"] = "bearer here if jwt set";
      }

      return config;
    },
    error => Promise.reject(error)
);

export default axiosInstance;
