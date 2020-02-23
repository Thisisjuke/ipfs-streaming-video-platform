<template>
  <div class="px-16 relative">
    <div id="create-account">
      <span class="mr-4 text-sm">Don't have an account ?</span>
      <router-link :to="{ name: 'register' }">
        <button class="btn-secondary">Create account</button>
      </router-link>
    </div>
    <form
      id="login-form"
      class="flex content-center flex-wrap"
      @submit.prevent="handleSubmit"
    >
      <h1>Sign in to GoLive</h1>
      <h3>Your private video player</h3>

      <div class="w-full mb-4 mt-8">
        <label class="block mb-2" for="username">
          Email
        </label>
        <input
            class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight"
            id="username"
            type="text"
            placeholder="Email"
            v-model="loginForm.email"
        />
      </div>
      <div class="w-full mb-6">
        <label class="block mb-2" for="password">
          Password
        </label>
        <input
              class="appearance-none border w-full py-2 px-3 text-gray-700 mb-3 leading-tight"
              id="password"
              type="password"
              placeholder="***********"
              v-model="loginForm.password"
        />
      </div>
      <div class="flex items-center justify-between">
        <button
              class="btn-primary"
              type="submit">
          Sign In
        </button>
      </div>
    </form>
  </div>
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
    async handleSubmit () {
      if (this.loginForm.email && this.loginForm.password) {
        this.login(this.loginForm)
      }
    }
  }
};
</script>

<style scoped>
#login-form{
  height:100%;
}
#create-account{
  @apply absolute;
  top: 2em;
  right: 2em;
}
</style>
