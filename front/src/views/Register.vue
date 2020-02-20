<template>
  <form @submit.prevent="registerUser">
    <input
        type="text"
        placeholder="Name"
        v-model="register.name"
        required
    />
    <input
        type="email"
        placeholder="Email"
        v-model="register.email"
        required
    />
    <input
        type="password"
        placeholder="Password"
        v-model="register.password"
        required
    />
    <button type="submit">Register me</button>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      register: {
        name: "",
        email: "",
        password: ""
      }
    };
  },
  methods: {
    async registerUser() {
      try {
        const response = await axios.post('http://localhost:8081/user/register', this.register);
        const token = response.data.token;
        if (token) {
          this.$router.push("/login");        }
      } catch (err) {
        console.log(err)
      }
    }
  }
};
</script>
