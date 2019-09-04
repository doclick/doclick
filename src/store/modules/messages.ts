export default {
    namespaced: true,
    state: {
        conversations: [],
        conversation: []
    },
    getters: {
        conversations: state => state.conversations,
        conversation: state => state.conversation
    },
    mutations: {
        SET_CONVERSATIONS: (state, payload) => state.conversations = payload,
        SET_CONVERSATION: (state, payload) => state.conversation = payload
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
        },

        getConversation({commit}, payload) {
            this.dispatch('index', {endpoint: 'message', params: {user_id_to: payload}})
            .then((data:any) => {
                commit('SET_CONVERSATION', data)
            }).catch((error:any) => {
            })
        }
    }
}