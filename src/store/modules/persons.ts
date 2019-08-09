export default {
    namespaced: true,
    state: {
        persons: []
    },
    getters: {
        persons: (state:any) => state.persons
    },
    mutations: {
        SET_PERSONS: (state:any, payload:any) => state.persons = payload
    },
    actions: {
        getNearby({commit}) {
            //this.dispatch('index', 'data/persons.json')
            this.dispatch('index', 'user')
            .then((data:any) => {
                commit('SET_PERSONS', data)
            }).catch((error:any) => {
            })
        }
    }
}