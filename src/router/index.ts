import Vue from 'vue';
import VueRouter from 'vue-router';
import WheatherView from '@/modules/wheather/wheather.view.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/modules/wheather/wheather.view.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
