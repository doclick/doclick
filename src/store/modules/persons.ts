export default {
    namespaced: true,
    state: {
        persons: [],
        matches: []
    },
    getters: {
        persons: (state:any) => state.persons,
        matches: (state:any) => state.matches
    },
    mutations: {
        SET_PERSONS: (state:any, payload:any) => state.persons = payload,
        SET_MATCHES: (state:any, payload:any) => state.matches = payload
    },
    actions: {
        getNearby({commit}) {
            //this.dispatch('index', 'data/persons.json')
            this.dispatch('index', {endpoint: 'user'})
            .then((data:any) => {
                commit('SET_PERSONS', data)
            }).catch((error:any) => {
            })
        },
        matches({commit}) {
            this.dispatch('index', {endpoint: 'user/matches/1'})
            .then((data:any) => {
                commit('SET_MATCHES', data)
            }).catch((error:any) => {
            })
        }
    }
}