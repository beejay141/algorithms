
function getallindices(A=[]) {
    if(A.length <= 1)return 0;
    const count = {};
    let result = 0;
    for (var element of A) {
        // let element = A[i];
        count[element] = count[element]+1 || 1;
    }

    let elements = Object.keys(count);
    console.log(count);
    for (const elem of elements) {
        if(count[elem] > 1){
            let size = count[elem];
            result+= ((factorial(size)/factorial(size-2))/2);
        }
    }
    return result;
}

let cache = [];

function factorial(n){
    if(n<=1) return 1;

    if(cache[n]) return cache[n];

    return cache[n] = n * factorial(n-1);
}


console.log(getallindices([2,3,5,3,6,3]));