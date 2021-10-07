function valid(x, y, n, m){
    return x > 0 && x <= n && y > 0 && y <= m;
}

function bfs(n, m, startingNode, endingNode, grid, vis, parent){
    // takes number of rows, number of columns, starting node, ending node the 2d grid (where I have to perform bfs) and a visited array (initially all of the values are set to false)
    // returns an object (shortest distance)
    // shift() -> removes item from the beginning
    // push() -> adds item in the end

    //parent.set(startingNode, startingNode); // parent of source is parent itself


    parent[startingNode.r][startingNode.c] = {r: startingNode.r, c: startingNode.c};

    let queue = [{r: startingNode.r, c: startingNode.c}];
    console.log(parent);
    vis[startingNode.r][startingNode.c] = true; // whenever I push an element in the queue, I have to visit that true
    // let cnt = 0;
    while(queue.length != 0){
        // cnt++;
        // if(cnt > 15)break;
        let cur = queue[0];
        queue.shift();

        vis[cur.r][cur.c] = true;

        if(cur == endingNode)break;

        if(valid(cur.r+1, cur.c, n, m) && !vis[cur.r+1][cur.c] && grid[cur.r+1][cur.c] != -1){
            let newNode = {r: cur.r+1, c: cur.c};
            vis[cur.r+1][cur.c] = true;
            parent[newNode.r][newNode.c] = cur;
            queue.push(newNode);
        }
        if(valid(cur.r-1, cur.c, n, m) && !vis[cur.r-1][cur.c] && grid[cur.r-1][cur.c] != -1){
            let newNode = {r: cur.r-1, c: cur.c};
            vis[cur.r-1][cur.c] = true;
            parent[newNode.r][newNode.c] = cur;
            queue.push(newNode);
        }
        if(valid(cur.r, cur.c+1, n, m) && !vis[cur.r][cur.c+1] && grid[cur.r][cur.c+1] != -1){
            let newNode = {r: cur.r, c: cur.c+1};
            vis[cur.r][cur.c+1] = true;
            parent[newNode.r][newNode.c] = cur;
            queue.push(newNode);
        }
        if(valid(cur.r, cur.c-1, n, m) && !vis[cur.r][cur.c-1] && grid[cur.r][cur.c-1] != -1){
            let newNode = {r: cur.r, c: cur.c-1};
            vis[cur.r][cur.c-1] = true;
            parent[newNode.r][newNode.c] = cur;
            queue.push(newNode);
        }

    }
    // let currentNode = {r: endingNode.r, c: endingNode.c};

    // console.log(parent[currentNode.r][currentNode.c]);
    // while(currentNode){
    //     if(currentNode == startingNode)break;
    //     console.log(parent[currentNode.r][currentNode.c]);
    //     currentNode = parent[currentNode.r][currentNode.c];
    // }
    console.log(parent[5][3] == startingNode);
}

export { bfs }

/*

(6, 7) => (6,6) => (6, 5) => (6, 4) => (6, 3) => (5, 3)


**/