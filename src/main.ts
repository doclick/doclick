import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';

import IonicVue from '@ionic/vue';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';

Vue.use(IonicVue);

import VueSocketIO from 'vue-socket.io';
import io from 'socket.io-client';
const SocketInstance = io.connect('http://192.168.10.10:3000');
Vue.use(new VueSocketIO({
  debug: true,
  connection: SocketInstance,
  vuex: {
    store,
    mutationPrefix: 'SOCKET_'
  },
}));


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
