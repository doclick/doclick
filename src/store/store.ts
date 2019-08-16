import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
import persons from './modules/persons'
import messages from './modules/messages'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    persons, messages
  },
  state: {
    api: axios.create({baseURL: process.env.VUE_APP_API}),
    user: {
      id: 1,
      name: 'Brian',
      last_name: 'Vanegas'
    }
  },
  getters: {
    userAuth: state => state.user
  },
  mutations: {

  },
  actions: {
    index({commit, state}, payload) {
      return new Promise((res,rej) => {
        state.api.get(payload.endpoint, {params: payload.params?payload.params:{}})
        .then((response) => {
          res(response.data)
        })
        .catch((error) => {
          rej(error)
        })
      })
    },
    save({commit, state}, payload) {
      return new Promise((res,rej) => {
        state.api.post(payload.endpoint, payload.params?payload.params:{})
        .then((response) => {
          res(response.data)
        })
        .catch((error) => {
          rej(error)
        })
      })
    }
  },
});
