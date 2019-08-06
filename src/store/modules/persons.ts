export default {
    namespaced: true,
    state: {
        persons: []
    },
    getters: {
        persons: state => state.persons
    },
    mutations: {
        SET_PERSONS: (state, payload) => state.persons = payload
    },
    actions: {
        getNearby({commit}) {
            this.dispatch('index', 'data/persons.json')
            .then((data) => {
                commit('SET_PERSONS', data)
            }).catch(error => {
            })
        }
    }
}