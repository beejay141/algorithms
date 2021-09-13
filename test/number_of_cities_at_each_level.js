function numberOfCities(T) {

    if (!T.length) return [];

    let cities = {};
    let capital = 0;
    // generate nodes base on if T[P]=Q & P=Q then P is capital. 2. T[P]=Q and P!=Q then there is a direct road between cities P and Q
    for (let p = 0; p < T.length; p++) {
        const q = T[p];
        if (p !== q) {
            if (cities[q]) {
                cities[q].push(p);
            } else {
                cities[q] = [p];
            }
        } else {
            capital = p;
        }
    }


    const distances = [];

    function dfs(root, level) {
        let paths = cities[root] || [];
        for (let city of paths) {
            distances[level] = distances[level] + 1 || 1;
            dfs(city, level + 1);
        }
    }

    dfs(capital, 0);
    return distances;
    // return levelWidth(capital,cities)
}

function newNumberOfCitiesAtEachDistance(t = []) {
    // generate nodes base on if T[P]=Q & P=Q then P is capital. 2. T[P]=Q and P!=Q then there is a direct road between cities P and Q
    let graph = {};
    let capital = null


    for (let p = 0; p < t.length; p++) {
        let q = t[p];
        if (q !== p) {
            if (graph[p]) graph[p].push(q);
            else graph[p] = [q];
            if (graph[q]) graph[q].push(p);
            else graph[q] = [p];
        } else {
            capital = q;
        }
    }

    return levelWidth(capital, graph,t.length-1);

}

function levelWidth(root, cities,length) {
    const queue = [...cities[root], 's']; // breadth first queue

    // console.log(queue);

    const widths = [0]; // return array
    const visited = [1];

    while (queue.length > 1) {
        // console.log("q", queue);
        const node = queue.shift(); // remove and return first element of the queue

        if (node !== 's') {
            if (visited.includes(node)) continue;
            visited.push(node);
        }

        if (node === 's') { // s denote end of each level

            queue.push('s');

            widths.push(0); // push counter for the next level into the result array
        } else {
            // where not at the end of the (level) chiildren of the last level
            let children = cities[node] || [];
            queue.push(...children); // push the children of the current node to the end of the queue

            widths[widths.length - 1]++; // increament the current level counter
        }
    }
    
    while (widths.length < length) {
        widths.push(0)
    }

    return widths;
}


// console.log(numberOfCities([9,1,4,9,0,4,8,9,0,1]))
console.log(newNumberOfCitiesAtEachDistance([9, 1, 4, 9, 0, 4, 8, 9, 0, 1]))