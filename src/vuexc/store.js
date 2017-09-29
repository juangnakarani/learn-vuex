import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters.js'
Vue.use(Vuex)

const state = {
    msg: 'Hello this is state message'
}

const mutations = {
    changePesan(anu, msgs){
        state.msg = msgs
    }
}

export default new Vuex.Store({
    state: state,
    mutations: mutations,
    getters, getters
});