import resourceApi from '@/api/videos';

const state = {
  videos: [],
};

const getters = {
};

const mutations = {
  setVideos(myState, videos) {
    // eslint-disable-next-line no-param-reassign
    myState.videos = videos;
  },
};

const actions = {
  async fetchVideos({ commit }) {
    const { data: videos } = await resourceApi.getVideos();
    commit('setVideos', videos);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
