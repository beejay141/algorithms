/****
 * Anangram is when two string use the same number of characters
 */

//  let j = "heollo!!!! yrr"
//  let removerspecial = j.replace(/[^\w]/g)

function anagram(A,B) {

    return cleanString(A) === cleanString(B)
}

function cleanString(str){
    return str.replace(/[^\w]/g,"")
           .toLowerCase()
           .split("").sort().join("");
}

// function buildCharMap(str) {
//     const charMap = {};

//     for(let char of str) {
//         charMap[char] = charMap[char] +1 || 1;
//     }

//     return charMap;
// }

console.log(anagram());