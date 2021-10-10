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

const setRowsAndColumns = (state,details) => {

    // details = {canvasHeight, canvasWidth, numberOfCols}
    state.mode = 0;

    state.canvasHeight = details.canvasHeight;
    state.canvasWidth = details.canvasWidth;
    
    let cols = details.numberOfCols;

    let boxLength = state.canvasWidth/cols;
    let rows = Math.floor(state.canvasHeight/boxLength)+1;

    state.rows = rows, state.cols = cols;state.boxLength = boxLength;

    let ararows = rows+20;
    let aracols = cols+20;

    // console.log(state.canvasHeight, state.canvasWidth, ararows, aracols);

    state.endingNode = {r: state.rows-3, c: state.cols-3};

    state.grid = new Array(ararows).fill(0).map(() => new Array(aracols).fill(0));
    state.vis = new Array(ararows).fill(0).map(() => new Array(aracols).fill(0));
    state.parent = new Array(ararows).fill(0).map(() => new Array(aracols).fill(0));

    state.gridAnimationSituation = new Array(ararows).fill(0).map(() => new Array(aracols).fill({
        pathAnimation: 0, 
        algorithmAnimation: 0,
        directionalArrow: 'mdi-arrow-right'
    }));

    // console.log(' here we go ' , state.rows, state.cols);
};

const changeDimension = (state, numberOfCols) => {
    state.mode = 0;
    if(numberOfCols == state.cols)return;
    let cols = numberOfCols;

    let boxLength = state.canvasWidth/cols;
    let rows = Math.floor(state.canvasHeight/boxLength)+1;

    state.rows = rows, state.cols = cols;state.boxLength = boxLength;

    let ararows = rows+20;
    let aracols = cols+20;

    state.endingNode = {r: state.rows-3, c: state.cols-3};

    state.grid = new Array(ararows).fill(0).map(() => new Array(aracols).fill(0));
    state.vis = new Array(ararows).fill(0).map(() => new Array(aracols).fill(0));
    state.parent = new Array(ararows).fill(0).map(() => new Array(aracols).fill(0));

    state.gridAnimationSituation = new Array(ararows).fill(0).map(() => new Array(aracols).fill({
        pathAnimation: 0, 
        algorithmAnimation: 0,
        directionalArrow: 'mdi-arrow-right'
    }));

    // console.log(' here we go ' , state.rows, state.cols);
}

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


    let ans = {};

    if(details[0] === 'bfs'){
        ans = bfs(state.rows, state.cols, state.startingNode, state.endingNode, state.grid, state.vis, state.parent);
    }
    else if(details[0] == 'dfs'){
        ans = dfs(state.rows, state.cols, state.startingNode, state.endingNode, state.grid, state.vis, state.parent);
    } 

    let shortestDistanceArray = ans.shortestDistance; 
    let fullPath = ans.fullPath;

    let timeout = 20;

    let speed = details[1];
    if(speed == 'Super Slow'){
        timeout = 500;
    }
    if(speed == 'Slow'){
        timeout = 200;
    }
    if(speed == 'Medium'){
        timeout = 100;
    }
    if(speed == 'Fast'){
        timeout = 50;
    }
    if(speed == 'Super Fast'){
        timeout = 1;
    }

    for(let i = 0; i < fullPath.length;i++){
        setTimeout(()=>{
            Vue.set(state.gridAnimationSituation[fullPath[i].r], fullPath[i].c, {
                pathAnimation: 0, 
                algorithmAnimation: 1
            });
        }, i*timeout+1);
    }
    let lastTime = fullPath.length*timeout+2;

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
        }, lastTime+(i+150));
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
    runAlgorithm,
    changeDimension
};