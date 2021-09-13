// function findVowel(params) {
//     const matches = params.match(/[aeiou]/gi) || [];
//     return matches.length;
// }

function findVowel(str) {
    let checker = ['a','e','i','o','u'];
    let counter = 0;

    for(let c of str){
        if (checker.includes(c)) {
            counter++;
        }
    }
    return counter;
}

console.log(findVowel('boolaji'))


// console.log(SlowSnail(31))