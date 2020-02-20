import axios from 'axios';

export default {
    login,
    logout,
};

async function login(data) {
    const userData = await axios.post('http://localhost:8081/user/login', data)
    if(userData) {
        const token = userData.data.token;
        localStorage.setItem("jwt", token)
    }
    return userData.data.user
}

function logout() {
    localStorage.removeItem('user');
}
