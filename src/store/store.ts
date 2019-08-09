import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
import persons from './modules/persons'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    persons
  },
  state: {
    api: axios.create({baseURL: process.env.VUE_APP_API})
  },
  mutations: {

  },
  actions: {
    index({commit, state}, endpoint) {
      return new Promise((res,rej) => {
        state.api.get(endpoint)
        .then((response) => {
          res(response.data)
        })
        .catch((error) => {
          rej(error)
        })
      })
    },
  },
});
