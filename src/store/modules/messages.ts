export default {
    namespaced: true,
    state: {

    },
    actions: {
        sendMessage({commit}, payload:any) {
            this.dispatch('save', {endpoint: 'message', params: payload})
            .then((data:any) => {
                //commit('SET_PERSONS', data)
            }).catch((error:any) => {
            })
        }
    }
}