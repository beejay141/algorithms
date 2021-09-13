function getCombinations(inputArray) {
    var result = [];
    
    combination([], inputArray,result);
    return result;
}



function combination(prefix, inputArray,result) {

    // for each of the elemnt in the input array
    for (var i = 0; i < inputArray.length; i++) {
        // create next set
        let newPrefix =  prefix.concat( [inputArray[i] ]);

        // push new set to list of set
        result.push(newPrefix);

        // remove current element from next set
        let remainingChars = inputArray.slice(i + 1);
      
        combination(newPrefix, remainingChars,result);
    }
}

console.log("final", getCombinations([-1, 2, 7]));