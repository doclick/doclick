import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
import persons from './modules/persons'
import messages from './modules/messages'
import user from './modules/user'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    persons, messages, user
  },
  state: {
    api: axios.create({baseURL: process.env.VUE_APP_API}),
    loading: false,
    user: {
      id: 1,
      name: 'Brian',
      last_name: 'Vanegas'
    }
  },
  getters: {
    userAuth: state => state.user,
    loading: state => state.loading,
    api: state => state.api
  },
  mutations: {
    SET_LOADING: (state, payload) => state.loading = payload
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
