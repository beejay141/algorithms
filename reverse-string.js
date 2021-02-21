// function name(str) {
//     return "".split('').reserse().join('');
// }

// function name(str) {
//     let rev = '';
//     for (const character of str) {
//         rev = character + rev
//     }
//     return rev;
// }

function reverse(str) {
    const strArr = str.split('');
    return strArr.reduce((reversed,currentStr)=>{
        return currentStr+reversed;
    },"");
}


console.log(reverse("bolaji"));