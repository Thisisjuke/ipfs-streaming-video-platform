import Vue from 'vue';
import Vuex from 'vuex';

import account from './modules/account';
import video from './modules/video';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    account,
    video,
  },
});

export default store;
