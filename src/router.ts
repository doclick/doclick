import Vue from 'vue';
import { NavigationGuard } from 'vue-router';
import { IonicVueRouter } from '@ionic/vue';
import store from './store/store'

Vue.use(IonicVueRouter);

const privateRoute: NavigationGuard = function(to, from, next) {
  if (!store.state.user.isAuthenticated) {
    next({ name: 'login' });
  } else {
    next();
  }
};

export default new IonicVueRouter({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ '@/views/Login')
      // beforeEnter: requiresTutorialRoute
    },
    {
      path: "/home",
      name: "home",
      component: () =>
        import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
        beforeEnter: privateRoute,
      children: [
        {
          path: "/about",
          name: "about",
          components: {
            about: () =>
              import(/* webpackChunkName: "about" */ "@/views/About.vue")
          }
        },
        {
          path: "/nearby",
          name: "nearby",
          components: {
            nearby: () =>
              import(/* webpackChunkName: "nearby" */ "@/views/Nearby.vue")
          }
        },
        {
          path: "/chat",
          name: "chat",
          components: {
            chat: () =>
              import(/* webpackChunkName: "chat" */ "@/views/Chat.vue")
          }
        },
        {
          path: "/matches",
          name: "matches",
          components: {
            matches: () =>
              import(/* webpackChunkName: "matches" */ "@/views/Matches.vue")
          }
        },
        {
          path: "/discover/:id?",
          name: "discover",
          components: {
            discover: () =>
              import(/* webpackChunkName: "discover" */ "@/views/Discover.vue")
          }
        }
      ]
    }
  ],
});
