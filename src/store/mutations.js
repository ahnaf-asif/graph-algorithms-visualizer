import Vue from 'vue';
import { bfs } from './algorithms/bfs';


const setMode = (state, modeToSet) => {
    state.mode = modeToSet
};

const setStartingNode = (state, node) => {
    state.startingNode = node
};

const setEndingNode = (state, node) => {
    state.endingNode = node
};

const setRowsAndColumns = (state,dimension) => {
    state.rows = dimension.rows, state.cols = dimension.cols;
    let ararows = dimension.rows+10;
    let aracols = dimension.cols+10;
    state.grid = new Array(ararows).fill(0).map(() => new Array(aracols).fill(0));
    state.vis = new Array(ararows).fill(0).map(() => new Array(aracols).fill(0));
    state.parent = new Array(ararows).fill(0).map(() => new Array(aracols).fill(0));

    state.gridAnimationSituation = new Array(ararows).fill(0).map(() => new Array(aracols).fill({
    pathAnimation: 0, 
    algorithmAnimation: 0
    }));
    // console.log(state.cols);
    // console.log(state.gridAnimationSituation[3][5]);

    
};
const changeObstacleStatus = (state, node) => {
    
    if( state.grid[node.r][node.c] == 0){
        Vue.set(state.grid[node.r], node.c, -1);
    } else {
        Vue.set(state.grid[node.r], node.c, 0);
    }
};
const resetGrid = (state) => {
    for(let i = 0; i <= state.rows;i++){
        for(let j = 0; j <= state.cols; j++){
            Vue.set(state.grid[i], j, 0);
            Vue.set(state.vis[i], j, 0);
            Vue.set(state.parent[i], j, 0);
            Vue.set(state.gridAnimationSituation[i], j, {
                pathAnimation: 0, 
                algorithmAnimation: 0
            });
        }
    }
};
const runAlgorithm = (state, details) => {
    console.log('details : ' + details);
    console.log(state.cols);

    let ans = bfs(state.rows, state.cols, state.startingNode, state.endingNode, state.grid, state.vis, state.parent);

    let shortestDistanceArray = ans.shortestDistance;
    let fullPath = ans.fullPath;

    let timeout = 100;

    for(let i = 0; i < fullPath.length;i++){
        setTimeout(()=>{
            Vue.set(state.gridAnimationSituation[fullPath[i].r], fullPath[i].c, {
                pathAnimation: 0, 
                algorithmAnimation: 1
            });
        }, i*timeout);
    }
    let lastTime = fullPath.length*timeout;

    for(let i = 0; i < shortestDistanceArray.length;i++){
        setTimeout(()=>{
            Vue.set(state.gridAnimationSituation[shortestDistanceArray[i].r], shortestDistanceArray[i].c, {
                pathAnimation: 1, 
                algorithmAnimation: 0
            });
        }, lastTime+i*timeout);
    }
    
    console.log(state.gridAnimationSituation);

    console.log(shortestDistanceArray, fullPath);

};


export default { 
    setMode, 
    setStartingNode, 
    setEndingNode, 
    setRowsAndColumns, 
    changeObstacleStatus, 
    resetGrid,
    runAlgorithm 
};