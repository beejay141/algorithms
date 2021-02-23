
// function fibonacci(n) {
//     const result = [0,1];
//     for (let i = 2; i <=n; i++) {
//       result.push(result[i-2]+result[i-1]);
//     }
//     return result.pop();
// }

// function fibonacci(n){
//    if (n<2) {
//        return n;
//    }

//    return fibonacci(n-1)+fibonacci(n-2);
// }

// memoization
function fibonacci(n){
   if (n<2) {
       return n;
   }

   return fibonacci(n-1)+fibonacci(n-2);
}

function memoize(fu) {
    const cache={};
    return function(...args){
        if (cache[args]) {
            return cache[args]
        }
        const result = fu.apply(this,args);
        cache[args]= result;
        return result;
    }
}

fibonacci = memoize(fibonacci)

console.log(fibonacci(100))