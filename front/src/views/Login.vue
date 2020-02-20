<template>
  <form @submit.prevent="handleSubmit">
    <input
      type="text"
      placeholder="Email"
      v-model="loginForm.email"
    />
    <input
      type="password"
      placeholder="Password"
      v-model="loginForm.password"
    />
    <button type="submit">Sign in</button>
  </form>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      loginForm: {
        email: "",
        password: "",
      }
    };
  },
  computed: {
    ...mapState('account', ['status'])
  },
  methods: {
    ...mapActions('account', ['login']),
    handleSubmit () {
      if (this.loginForm.email && this.loginForm.password) {
        this.login(this.loginForm).then(() => {
          this.$router.push('dashboard')
        })
      }
    }
  }
};
</script>
