function dijkstra(graph) {
    //  to keep the visited nodes
    let processed = [];
    //  known nodes from start node
    let weights = Object.assign({},graph.start);
    //  to keep track of the path
    let parents = {
        finish: null
    };
    
    for (const key in graph.start) {
        parents[key] = 'start';
    }


    let node = FindShortNextNode(weights, processed);

    while (node) {
        let weight = weights[node];
        let neighbors = graph[node];

        for (const n in neighbors) {
            let newWeight = weight + neighbors[n];
            if (!weights[n] || newWeight < weights[n]) {
                weights[n] = newWeight;
                parents[n] = node;
            }
        }
        processed.push(node);
        node = FindShortNextNode(weights,processed)
    }

    let optimalPath = ['finish'];
    let parent = parents['finish'];
    while (parent) {
        optimalPath.unshift(parent);
        parent = parents[parent];
    }
    return optimalPath;
}

function FindShortNextNode(weights, processed) {
    // get key of the know nodes
    let keys = Object.keys(weights)
    
    let lowestWeightNode = keys.reduce((lowest,node)=>{
        if (lowest === null && !processed.includes(node)) {
            lowest = node
        }else if(weights[node] < weights[lowest] && !processed.includes(node)){
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