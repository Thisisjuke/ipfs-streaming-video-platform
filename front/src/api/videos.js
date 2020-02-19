import axios from 'axios';

export default {
  getVideos() {
    return axios.get('http://api.tvmaze.com/search/shows?q=hero');
  },
};
