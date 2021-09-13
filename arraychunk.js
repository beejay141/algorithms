function arrayChuck(params = [], size = 3) {
    const result = []
    while (params.length) {
        if (params.length >= size)
            result.push(params.splice(0, size))
        else{
            result.push(params)
            break;
        }
    }

    return result;
}


console.log(arrayChuck([1, 3, 5, 6, 7, 8, 5, 4,4,7,8,9,5,3,4,66,4,6,3,3,5,4,5,6,7,8,99,0,2,1,4,6,7,8,5,76,3,5,23,5,3,6,4,76,4,6,4,6,4,6,4,4,5,4,5,4,5,4,5,4,5,4,5,4,5,4,5,4,5,4,5,4]))