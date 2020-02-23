<template>
  <div class="px-16 relative">
    <div id="log-in">
      <span class="mr-4 text-sm">Already have an account ?</span>
      <router-link :to="{ name: 'login' }">
        <button class="btn-secondary">Log in</button>
      </router-link>
    </div>
    <form
          id="register-form"
          class="flex content-center flex-wrap -mx-2"
          @submit.prevent="registerUser"
    >
      <div class="w-full px-2 mb-8">
        <h1>Register</h1>
        <h3>Your private video player</h3>
      </div>

      <div class="w-1/2 px-2">
        <label class="block mb-2" for="company">
          Company Name :
        </label>
        <input
            class="appearance-none border w-full py-2 px-3 text-gray-700 mb-3 leading-tight"
            id="company"
            type="password"
            placeholder="Ubisoft"
        />
      </div>
      <div class="w-1/2 px-2">
        <label class="block mb-2" for="company-type">
          Company Type :
        </label>
        <div class="relative">
          <select
              class="appearance-none border w-full y-2 px-3 text-gray-700 bg-white cursor-pointer"
              id="company-type"
          >
            <option>New Mexico</option>
            <option>Missouri</option>
            <option>Texas</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>
      </div>

      <div class="w-full mb-4 px-2">
        <label class="block mb-2" for="email">
          Email
        </label>
        <input
            class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight"
            id="email"
            type="text"
            placeholder="Email"
            v-model="register.email"
        />
      </div>
      <div class="w-1/2 mb-6 px-2 px-2">
        <label class="block mb-2" for="password">
          Password
        </label>
        <input
            class="appearance-none border w-full py-2 px-3 text-gray-700 mb-3 leading-tight"
            id="password"
            type="password"
            placeholder="***********"
            v-model="register.password"
        />
      </div>
      <div class="w-1/2 mb-6 px-2">
        <label class="block mb-2" for="validate-password">
          Validate password
        </label>
        <input
                class="appearance-none border w-full py-2 px-3 text-gray-700 mb-3 leading-tight"
                id="validate-password"
                type="password"
                placeholder="***********"
        />
      </div>
      <div class="mx-2 flex items-center justify-between">
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
import axios from '@/client/axios.js';

export default {
  data() {
    return {
      register: {
        name: '',
        email: '',
        password: '',
      },
    };
  },
  methods: {
    async registerUser() {
      try {
        const response = await axios.post('http://localhost:8081/user/register', this.register);
        const { token } = response.data;
        if (token) {
          this.$router.push('/login');
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style scoped>
#register-form{
  height:100%;
}
#log-in{
  @apply absolute;
  top: 2em;
  right: 2em;
}
#company-type {
  line-height: 2.25;
}
</style>
