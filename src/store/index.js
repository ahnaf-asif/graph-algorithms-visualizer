import Vue from 'vue'
import Vuex from 'vuex'
import { bfs } from './algorithms/bfs.js'

Vue.use(Vuex)

const state= {
  mode: 0, // mode 0 means no mode, 1 means set start, 2 means set end, 3 means obstacle,
  rows: 0,
  cols: 0,
  grid: [],
  vis: [],
  parent: [],
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
  }
};

const mutations= {
  setMode: (state, modeToSet) => (state.mode = modeToSet),
  setStartingNode: (state, node) => (state.startingNode = node),
  setEndingNode: (state, node) => (state.endingNode = node),
  setRowsAndColumns: (state,dimension) => {
    state.rows = dimension.rows, state.cols = dimension.cols;
    let ararows = dimension.rows+10;
    let aracols = dimension.cols+10;
    state.grid = new Array(ararows).fill(0).map(() => new Array(aracols).fill(0));
    state.vis = new Array(ararows).fill(0).map(() => new Array(aracols).fill(0));
    state.parent = new Array(ararows).fill(0).map(() => new Array(aracols).fill(0));

    bfs(state.rows, state.cols, state.startingNode, state.endingNode, state.grid, state.vis, state.parent);
  },
  changeObstacleStatus : (state, node) => {
    
    if( state.grid[node.r][node.c] == 0){
      Vue.set(state.grid[node.r], node.c, -1);
    } else {
      Vue.set(state.grid[node.r], node.c, 0);
    }
  },
  resetGrid : (state) => {
    for(let i = 0; i < state.rows;i++){
      for(let j = 0; j < state.cols; j++){
        Vue.set(state.grid[i], j, 0);
      }
    }
  }
};
 
const getters = { 
  currentMode: (state)=> state.mode,
  currentRows: (state)=> state.rows,
  currentCols: (state)=> state.cols,
  startingNode: (state)=> state.startingNode,
  endingNode: (state)=> state.endingNode,
  grid: (state) => state.grid,
  
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
