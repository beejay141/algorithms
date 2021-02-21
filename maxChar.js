function maxString(str) {
    const count = {};
    let max = 1;
    let maxChar = str[0];

    for (const iterator of str) {
        count[iterator] = count[iterator] + 1 || 1;
        
        if (count[iterator] > max) {
            max = count[iterator];
            maxChar = iterator;
        }
    }
    return {max,maxChar}
    

}

console.log(maxString("hello world"))