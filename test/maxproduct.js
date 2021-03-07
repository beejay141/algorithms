
function maxProduct(A=[]){
    let max = 0;
    if(!A.length) return 0;

    for (let i = 0; i < A.length; i++) {
        for (let j = (i+1); j < A.length; j++) {
            let slice = A.slice(i,j);
            let prod= memoizedProd(slice);
            if(prod>max) max = prod;
        }
    }

    return max > 1000000000? 1000000000:max;
}
let cache = {};

function memoizedProd(pp=[]){
    if(cache[pp]){
        return cache[pp];
    }
    
    let prod= 1;

    let start = pp.shift();

    pp.forEach(e=>{
        prod*=e;
    });

    cache[pp] = prod;
    return start * cache[pp];
}

console.log(maxProduct([3,5,1,2,5,7,8,9,4]))