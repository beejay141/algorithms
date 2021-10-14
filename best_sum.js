function bestSum(array, target){
    if (target === 0) return [];
    if (target < 0) return null;

    let shortest = null;

    for(let num of array){
        let remainder = target - num;
        let newCombination = bestSum(array,remainder);
        if(newCombination !== null){
            if(shortest === null || newCombination.length < shortest.length){
                shortest = [...newCombination,num]
            }
        }

    }

    return shortest;
}