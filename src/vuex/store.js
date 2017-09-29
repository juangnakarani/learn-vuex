import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    msg: 'Hello this is state message'
}

const mutations = {
    changePesan(state, msg){
        state.msg = msg
    }
}

export default new Vuex.Store({
    state: state,
    mutations: mutations
});