import axios from '@/client/axios.js';

export default {
    login,
    logout,
};

async function login(data) {
    await axios.post('user/login', data)
        .then((userData) => {
            if(userData) {
                const token = userData.data.token;
                localStorage.setItem("jwt", token)
            }
            return userData.data.user
        })
}

function logout() {
    localStorage.removeItem('user');
}
