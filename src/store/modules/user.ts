export default {
    namespaced: true,
    state: {
        isAuthenticated: false,
        user: {}
    },
    getters: {
        isAuthenticated: state => state.isAuthenticated,
        user: state => state.user
    },
    mutations: {
        SET_AUTH: (state, payload) => state.isAuthenticated = payload,
        SET_USER: (state, payload) => state.user = payload,
    },
    actions: {
        authentication({commit}, user:any) {
            return new Promise((resolve) => {
                this.commit('SET_LOADING', true);
                this.state.api.get('login', {params: user})
                .then(response => {
                    commit('SET_AUTH', true);
                    commit('SET_USER', response.data.user)
                    const token = response.data.access_token
                    this.state.api.defaults.headers.common['Authorization'] = 'Bearer ' + token;
                    localStorage.setItem('token', token)
                    localStorage.setItem('user', JSON.stringify(response.data.user))
                    resolve(response)
                }).catch(err => {
                    localStorage.removeItem('token')
                    reject(err)
                })
                .then(() => {
                    this.commit('SET_LOADING', false);
                })
            })
        },

        logout({commit}) {
            return new Promise((resolve) => {
                this.commit('SET_LOADING', true);
                commit('SET_USER', null)
                localStorage.removeItem('token')
                localStorage.removeItem('user')
                resolve()
            })
        },

        sendMessage({commit}, payload:any) {
            this.dispatch('save', {endpoint: 'message', params: payload})
            .then((data:any) => {
                //commit('SET_PERSONS', data)
            }).catch((error:any) => {
            })
        }
    }
}