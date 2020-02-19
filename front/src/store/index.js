import Vue from 'vue';
import Vuex from 'vuex';

import video from './modules/video';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    video,
  },
});

export default store;
