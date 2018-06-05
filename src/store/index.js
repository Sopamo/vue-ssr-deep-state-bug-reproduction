import Vue from "vue"
import Vuex from "vuex"

import mutations from "./mutations"
import state from "./state"

Vue.use(Vuex)

export function createStore() {
  return new Vuex.Store({
    strict: true,
    state,
    mutations
  })
}
