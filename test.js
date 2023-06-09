// function jj(A = [], B = [], P = "") {
//     let phones = B.filter(c => c.includes(p));
//     if (phones.length) {
//         let names = [];
//         phones.forEach(e => {
//             names.push(A[B.indexOf(e)]);
//         });
//         return names.sort().shift();
//     }
//     return "NO CONTACT";

// }


// function solve(S) {
//     while (S.includes("-") || S.includes(" ")) {
//         S = S.replace(" ", "").replace("-", "");
//     }
//     const length = S.length;
//     if (length <= 3) {
//         return S;
//     } else if (S == 4) {
//         return `${S.substr(0,2)}-${S.substr(2)}`;
//     } else {
//         let result = "";
//         let mod = length % 3;
//         let divisorLength = length - mod;
//         if (mod == 1) {
//             divisorLength -= 3;
//             mod += 3;
//         }

//         let counter = 0;
//         console.log(divisorLength);
//         while (counter < divisorLength) {
//             result += S.substr(counter, 3);
//             counter += 3;
//             console.log("count", counter);
//             if (counter !== divisorLength) {
//                 result += "-";
//             }
//             console.log("count2", counter);


//         }

//         if (mod == 4) {
//             result += `-${S.substr(counter,2)}-${S.substr(counter+2)}`
//         } else if (mod > 0) {
//             result += `-${S.substr(counter)}`;
//         }

//         return result;
//     }


// }

// const dArray = [];

// function solution(T = [], R=[]) {
//     for (let index = 0; index < array.length; index++) {
//         const element = array[index];

//     }
// }


// console.log("ans",solution([2, 1, 5, 3, 4]));

const findLowestWeightNode = (weights, processed) => {
    console.log("weight",weights)
    console.log("proceced",processed)
    const knownNodes = Object.keys(weights)

    const lowestWeightNode = knownNodes.reduce((lowest, node) => {
        if (lowest === null && !processed.includes(node)) {
            lowest = node;
        }
        if (weights[node] < weights[lowest] && !processed.includes(node)) {
            lowest = node;
        }
        return lowest;
    }, null);

    return lowestWeightNode
};

const dijkstra = (graph) => {

    // track lowest cost to reach each node  
    const weights = Object.assign({}, graph.start);

    console.log(weights);

    // track paths  
    const parents = {
        finish: null
    };
    for (let child in graph.start) {
        parents[child] = 'start';
    }

    // track nodes that have already been processed  
    const processed = [];
    //Next, we’ll set the initial value of the node being processed //using the lowestCostNode function. Then, we’ll begin a while loop, //which will continuously look for the cheapest node.
    let node = findLowestWeightNode(weights, processed);

    while (node) {
        console.log("node",node)
        //Get the weight of the current node
        let weight = weights[node];
        //Get all the neighbors of current node
        let children = graph[node];
        //Loop through each of the children, and calculate the weight to reach that child node. We'll update the weight of that node in the weights object if it is lowest or the ONLY weight available
        for (let n in children) {
            let newWeight = weight + children[n];
            if (!weights[n] || weights[n] > newWeight) {
                weights[n] = newWeight;
                parents[n] = node;
            }
        }
        //push processed data into its data structure
        processed.push(node);
        // repeat until we processed all of our nodes.    
        node = findLowestWeightNode(weights, processed);
    }

    let optimalPath = ['finish'];
    let parent = parents.finish;
    while (parent) {
        optimalPath.unshift(parent);
        parent = parents[parent]; // add parent to start of path array
    }

    const results = {
        distance: weights.finish,
        path: optimalPath
    };

    return results;

}; //end of function

console.log("result", dijkstra({
    start: {
        A: 5,
        B: 2
    },
    A: {
        C: 4,
        D: 2
    },
    B: {
        A: 8,
        D: 7
    },
    C: {
        D: 6,
        finish: 3
    },
    D: {
        finish: 1
    },
    finish: {}
}));