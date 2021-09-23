function getCombinations(chars) {
    var result = [];

    combination('', chars,result);

    return result;
}

function combination(prefix, chars,result) {

    // for each of the elemnt in the input array
    for (var i = 0; i < chars.length; i++) {
        // create next set
        let newPrefix = prefix+chars[i];

        // push new set to list of set
        result.push(newPrefix);

        // remove current element from next set
        let remainingChars = chars.slice(i + 1);
      
        combination(newPrefix, remainingChars,result);
    }
}

console.log("final", getCombinations(["a", "b","c","d","e","f"]))