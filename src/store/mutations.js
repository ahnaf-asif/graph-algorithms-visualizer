import Vue from 'vue';
import { bfs } from './algorithms/bfs';
import { dfs } from './algorithms/dfs';


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
        algorithmAnimation: 0,
        directionalArrow: 'mdi-arrow-right'
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

    state.mode = 0;

    console.log('details : ' + details);
    console.log(state.cols);

    let ans = {};

    if(details[0] === 'bfs'){
        ans = bfs(state.rows, state.cols, state.startingNode, state.endingNode, state.grid, state.vis, state.parent);
    }
    else if(details[0] == 'dfs'){
        ans = dfs(state.rows, state.cols, state.startingNode, state.endingNode, state.grid, state.vis, state.parent);
    } 

    let shortestDistanceArray = ans.shortestDistance; 
    let fullPath = ans.fullPath;

    let timeout = 500;

    let speed = details[1];
    if(speed == 'Super Slow'){
        timeout = 1000;
    }
    if(speed == 'Slow'){
        timeout = 500;
    }
    if(speed == 'Medium'){
        timeout = 300;
    }
    if(speed == 'Fast'){
        timeout = 200;
    }
    if(speed == 'Super Fast'){
        timeout = 100;
    }

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
        let direction = 'mdi-arrow-right';
        if(i != 0 && i != shortestDistanceArray.length-1){
            let next = shortestDistanceArray[i+1];
            let cur = shortestDistanceArray[i];

            if(next.r == cur.r){
                if(next.c > cur.c)direction = 'mdi-arrow-right';
                else direction = 'mdi-arrow-left';
            }
            if(next.c == cur.c){
                if(next.r < cur.r)direction = 'mdi-arrow-up';
                else direction = 'mdi-arrow-down';
            }
        }
        setTimeout(()=>{
            Vue.set(state.gridAnimationSituation[shortestDistanceArray[i].r], shortestDistanceArray[i].c, {
                pathAnimation: 1, 
                algorithmAnimation: 0,
                directionalArrow: direction
            });
        }, lastTime+i*100);
    }
    
    // console.log(state.gridAnimationSituation);

    // console.log(shortestDistanceArray, fullPath);

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