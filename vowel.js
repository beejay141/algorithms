function findVowel(params) {
    const matches = params.match(/[aeiou]/gi) || [];
    return matches.length;
}

console.log(findVowel('boolaji'))