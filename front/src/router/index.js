import Vue from 'vue';
import Router from 'vue-router';
import jwtDecode from 'jwt-decode';

import defaultLayout from '@/layouts/defaultLayout.vue';
import loginLayout from '@/layouts/loginLayout.vue';

import dashboardRoutes from '@/router/dashboard';
import authRoutes from '@/router/auth';
import profileRoutes from '@/router/profile';
import videoRoutes from '@/router/videos';
import Home from '@/views/Home.vue';

import store from '@/store';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      component: defaultLayout,
      path: '',
      children: [
        ...dashboardRoutes,
        ...profileRoutes,
        ...videoRoutes,
      ],
    },
    {
      component: loginLayout,
      path: '',
      children: [
        ...authRoutes,
      ],
    },
    { path: '*', redirect: '/' },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('jwt') == null) {
      next({
        path: '/login',
      });
    }
    if (localStorage.getItem('jwt') && !store.getters['account/userInfos']) {
      const token = localStorage.getItem('jwt');
      const user = jwtDecode(token);
      store.commit('account/USER_DATA_FROM_JWT', user);
    }
    next();
  } else {
    next();
  }
});

export default router;
