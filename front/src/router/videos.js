import WatchVideo from '@/views/WatchVideo.vue';
import VideoCatalogue from '@/views/VideoCatalogue.vue';

const routes = [
  {
    path: '/videos',
    name: 'videos',
    component: WatchVideo,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/catalogue',
    name: 'catalogue',
    component: VideoCatalogue,
    meta: {
      requiresAuth: true
    }
  },
];

export default routes;
