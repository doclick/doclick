export default {
    namespaced: true,
    state: {
        conversations: []
    },
    getters: {
        conversations: state => state.conversations
    },
    mutations: {
        SET_CONVERSATIONS: (state, payload) => state.conversations = payload
    },
    actions: {
        getConversations({commit}) {
            this.dispatch('index', {endpoint: 'message/conversation'})
            .then((data:any) => {
                commit('SET_CONVERSATIONS', data)
            }).catch((error:any) => {
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