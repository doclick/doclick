import Vue from 'vue';
import { IonicVueRouter } from '@ionic/vue';
import Home from './views/Home.vue';

Vue.use(IonicVueRouter);

export default new IonicVueRouter({
  mode: 'history',
  base: '/',
  routes: [
    { path: "/", redirect: "/home" },

    {
      path: "/home",
      name: "home",
      component: () =>
        import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
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
          path: "/discover",
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
