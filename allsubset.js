function getCombinations(chars) {
    var result = [];

    combination('', chars,result);

    return result;
}

function combination(prefix, chars,result) {

    // for each of the elemnt in the input array
    for (var i = 0; i < chars.length; i++) {
        // create next set
        prefix+=chars[i];

        // push new set to list of set
        result.push(prefix);

        // remove current element from next set
        let remainingChars = chars.slice(i + 1);
      
        combination(prefix, remainingChars,result);
    }
}

console.log("final", getCombinations(["a", "b","c","e","f"]))