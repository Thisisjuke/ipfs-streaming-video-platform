<template>
  <form @submit.prevent="loginUser">
    <input
      type="text"
      placeholder="Email"
      v-model="login.email"
    />
    <input
      type="password"
      placeholder="Password"
      v-model="login.password"
    />
    <button type="submit">Sign in</button>
  </form>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      login: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    async loginUser() {
      try {
        console.log(this.login)
        let response = await axios.post(`http://localhost:8081/user/login`, this.login);
        let token = response.data.token;
        localStorage.setItem("jwt", token);
        if (token) {
          this.$router.push("/dashboard");
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>
