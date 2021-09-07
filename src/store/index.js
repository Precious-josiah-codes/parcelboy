import { createStore } from 'vuex'

export default createStore({
    state: {
        driverId: '',
        requestId: '',
        senderId: ''

    },
    getters: {},
    mutations: {
        bargainResponse(state, value) {
            state.driverId = value.driverId
            state.requestId = value.requestId
            state.senderId = value.senderId
        } 
    },
    actions: {},
    module: {},
})

