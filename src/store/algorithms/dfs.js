function valid(x, y, n, m){
    return x > 0 && x <= n && y > 0 && y <= m;
}
function isEqual(pairA, pairB){
    return pairA.c == pairB.c && pairA.r == pairB.r;
}

var isDone = false;

function call(n, m, cur, last, grid, vis, parent, fullPath){
    

    let delta = [[0,1], [1, 0], [0, -1], [-1, 0]];

    if(isEqual(cur, last) || vis[last.r][last.c] || isDone){
        return {
            fullPath: fullPath,
            parent: parent
        }
    }
    for(let i = 0; i < 4;i++){
        if(valid(cur.r+delta[i][0], cur.c+delta[i][1], n, m) && grid[cur.r+delta[i][0]][cur.c+delta[i][1]] != -1 && !vis[cur.r+delta[i][0]][cur.c+delta[i][1]]){
            let newNode = {r: cur.r+delta[i][0], c: cur.c+delta[i][1]};
            fullPath.push(newNode);
            vis[newNode.r][newNode.c] = true;
            parent[newNode.r][newNode.c] = cur;
            if(isEqual(newNode, last)){
                isDone = true;
                return {
                    fullPath:fullPath,
                    parent: parent
                }
            }
            call(n, m, newNode, last, grid, vis, parent, fullPath);
        }
    }
}

function dfs(n, m, startingNode, endingNode, grid, vis, parent){
    
    
    isDone = false;
    
    let fullPath = [startingNode];
    let distancePath = [];
    parent[startingNode.r][startingNode.c] = startingNode;
    vis[startingNode.r][startingNode.c] = true;

    call(n, m, startingNode, endingNode, grid, vis, parent, fullPath);

    let lastNode = endingNode;

    while(lastNode){
        if(isEqual(parent[lastNode.r][lastNode.c], lastNode))break;
        distancePath.unshift(lastNode);
        lastNode = parent[lastNode.r][lastNode.c];
    }

    return {
        shortestDistance: distancePath,
        fullPath: fullPath
    };
}

export { dfs }