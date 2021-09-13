function dijkstra(graph) {
    //  to keep the visited nodes
    let visited = [];
    //  known nodes from start node
    let edges = Object.assign({},graph.start);
    //  to keep track of the path
    let parents = {
        finish: null
    };
    
    for (const key in graph.start) {
        parents[key] = 'start';
    }


    let node = FindShortNextNode(edges, visited);

    while (node) {
        let edge = edges[node];
        let neighbors = graph[node];

        for (const n in neighbors) {
            let newWeight = edge + neighbors[n];
            if (!edges[n] || newWeight < edges[n]) {
                edges[n] = newWeight;
                parents[n] = node;
            }
        }
        visited.push(node);
        node = FindShortNextNode(edges,visited)
    }

    let optimalPath = ['finish'];
    let parent = parents['finish'];
    while (parent) {
        optimalPath.unshift(parent);
        parent = parents[parent];
    }
    return optimalPath;
}

function FindShortNextNode(edges, visited) {
    // get key of the know nodes
    let keys = Object.keys(edges)
    
    let lowestWeightNode = keys.reduce((lowest,node)=>{
        if (lowest === null && !visited.includes(node)) {
            lowest = node
        }else if(edges[node] < edges[lowest] && !visited.includes(node)){
            lowest = node;
        }
        return lowest;
    },null);

    return lowestWeightNode;
}

console.log("result", dijkstra({
    start: {A:5,B:2},
    A:{C:4,D:2},
    B:{A:8,D:7},
    C:{
        D:6,finish:3
    },
    D:{B:7,A:2,C:6,finish:1},
    finish:{C:3,D:1}
}))
