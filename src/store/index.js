import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state= {
  mode: 0 // mode 0 means no mode, 1 means set start, 2 means set end, 3 means obstacle
};

const actions= {
  setModeToStart({commit}){
    commit('setMode', 1);
  },
  setModeToEnd({commit}){
    commit('setMode', 2);
  },
  setModeToObstacle({commit}){
    commit('setMode', 3);
  },
  setModeToDefault({commit}){
    commit('setMode', 0);
  }
};

const mutations= {
  setMode: (state, modeToSet) => (state.mode = modeToSet),
};

const getters = {
  currentMode: (state)=> state.mode
};
const modules= { 
  
}
export default new Vuex.Store({
  state: state,
  mutations: mutations,
  actions: actions,
  modules: modules,
  getters: getters
})
