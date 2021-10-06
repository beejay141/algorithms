function findAllSubsetInOder(string=""){
        if(!string.length) return [];

        let result = [];

        for (let i = 0; i < string.length; i++) {
            
            for (let j = 1; j <= string.length-i; j++){
               result.push(string.substr(i,j));
            }
        }

        return result;
}

console.log(findAllSubsetInOder("test"));