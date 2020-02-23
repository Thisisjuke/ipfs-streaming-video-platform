import axios from '@/client/axios.js';

async function login(data) {
  await axios.post('user/login', data)
    .then((userData) => {
      if (userData) {
        const { token } = userData.data;
        localStorage.setItem('jwt', token);
      }
      return userData.data.user;
    });
}

function logout() {
  localStorage.removeItem('user');
}

export default {
  login,
  logout,
};
