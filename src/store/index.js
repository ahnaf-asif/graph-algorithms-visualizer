import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'

Vue.use(Vuex)

const state= {
  mode: 0, // mode 0 means no mode, 1 means set start, 2 means set end, 3 means obstacle,
  rows: 0,
  cols: 0,
  grid: [],
  vis: [],
  parent: [],

  algorithmVisualizationSpeed: 'Medium',
  gridAnimationSituation: [],

  startingNode: {
    r: 5, c: 3
  },
  endingNode:{
    r: 6, c: 7
  }
};

const actions= {
  setMode({commit}, modeToSet){
    commit('setMode', modeToSet);
  },
  setRowsAndColumns({commit}, dimension){
    commit('setRowsAndColumns', dimension);
  },
  setStartingNode({commit}, node){
    commit('setStartingNode', node);
  },
  setEndingNode({commit}, node){
    commit('setEndingNode', node);
  },
  resetGrid({commit}){
    commit('resetGrid');
  },
  changeObstacleStatus({commit}, node){
    commit('changeObstacleStatus', node);
  },
  runAlgorithm({commit}, details){
    commit('runAlgorithm', details);
  },
};
 
const getters = { 
  currentMode: (state)=> state.mode,
  currentRows: (state)=> state.rows,
  currentCols: (state)=> state.cols,
  startingNode: (state)=> state.startingNode,
  endingNode: (state)=> state.endingNode,
  grid: (state) => state.grid,
  gridAnimationSituation: (state) => state.gridAnimationSituation,
  
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
