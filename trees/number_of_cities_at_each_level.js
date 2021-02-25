

function numberOfCities(T){

    if(!T.length)return[];

    let cities = {};
    let capital=0;
    // generate nodes base on if T[P]=Q & P=Q then P is capital. 2. T[P]=Q and P!=Q then there is a direct road between cities P and Q
    for (let p = 0; p < T.length; p++) {
        const q = T[p];
        if(p!==q){
            if(cities[q]){
                cities[q].push(p);
            }else{
                cities[q]= [p];
            }
        }else{
            capital = p;
        }
    }

    
    const distances = [];
    function dfs(root,dist){
        let paths = cities[root] || [];
        for(let city of paths) {
            distances[dist] = distances[dist]+1 || 1;
            dfs(city, dist+1);
        }
    }
    dfs(capital,0);
    return distances;
    // return levelWidth(capital,cities)
}

// function levelWidth(root,cities) {
//     const queue = [root,'s']; // breadth first queue

//     const widths = [0]; // return array

//     while (queue.length > 1) {
//         const node = queue.shift(); // remove and return first element of the queue

//         if (node === 's') { // s denote end of each level

//             queue.push('s');

//             widths.push(0); // push counter for the next level into the result array
//         }else{ 
//             // where not at the end of the (level) chiildren of the last level
//             let chid = cities[node] || [];
//             queue.push(...chid); // push the children of the current node to the end of the queue
            
//             widths[widths.length-1]++; // increament the current level counter
//         }
//     }
//     return widths;
// }


console.log(numberOfCities([9,1,4,9,0,4,8,9,0,1]))