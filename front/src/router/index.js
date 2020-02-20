import Vue from 'vue';
import Router from 'vue-router';

import defaultLayout from '@/layouts/defaultLayout.vue';
import loginLayout from '@/layouts/loginLayout.vue';
import userLayout from '@/layouts/userLayout.vue';

import dashboardRoutes from '@/router/dashboard';
import authRoutes from '@/router/auth';
import profileRoutes from '@/router/profile';
import videoRoutes from '@/router/videos';

import Home from '@/views/Home.vue';

Vue.use(Router);

const router = new Router({
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
    },
    {
      component: loginLayout,
      path: '',
      children: [
        {
          path: '/',
          name: 'Home',
          component: Home,
        },
        ...authRoutes,
      ],
    }],
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem("jwt") == null) {
      next({
        path: "/login"
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
