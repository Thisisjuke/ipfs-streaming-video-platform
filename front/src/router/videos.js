import WatchVideo from '@/views/WatchVideo.vue';
import VideoCatalogue from '@/views/VideoCatalogue.vue';

const routes = [
  {
    path: '/videos',
    name: 'videos',
    component: WatchVideo,
  },
  {
    path: '/catalogue',
    name: 'catalogue',
    component: VideoCatalogue,
  },
];

export default routes;
