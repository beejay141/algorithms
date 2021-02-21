function getCombinations(inputArray) {
    var result = [];
    
    combination([], inputArray,result);

    return result;
}

function combination(prefix, inputArray,result) {

    // for each of the elemnt in the input array
    for (var i = 0; i < inputArray.length; i++) {
        // create next set
        let pp =  prefix.concat( [inputArray[i] ]);

        // push new set to list of set
        result.push(pp);

        // remove current element from next set
        let remainingChars = inputArray.slice(i + 1);
      
        combination(prefix.concat( [inputArray[i]]), remainingChars,result);
    }
}

console.log("final", getCombinations([-1, 2, 7]))