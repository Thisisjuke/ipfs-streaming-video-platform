import Profile from '@/views/Profile.vue';

const routes = [
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    meta: {
      requiresAuth: true
    }
  },
];

export default routes;
