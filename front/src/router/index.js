import Vue from 'vue';
import Router from 'vue-router';

import defaultLayout from '@/layouts/defaultLayout.vue';
import userLayout from '@/layouts/userLayout.vue';

import dashboardRoutes from '@/router/dashboard';
import profileRoutes from '@/router/profile';
import videoRoutes from '@/router/videos';

import Home from '@/views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
    component: defaultLayout,
    path: '',
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home,
      },
      ...dashboardRoutes,
      ...videoRoutes,
    ],
  },
  {
    component: userLayout,
    path: '',
    children: [
      ...profileRoutes,
    ],
  }],
});
