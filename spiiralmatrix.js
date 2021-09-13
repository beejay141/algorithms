function spiralMatrix(n) {
    let result = [];

    for (let i = 0; i <n; i++) {
        result.push([]);
    }

    let counter = 1;
    let startRow=0;
    let startColumn = 0;
    let endColumn = n-1;
    let endRow = n-1;

    // box strinking;
    while (startRow <= endRow && startColumn <= endColumn) {
        
        // top row loop, c++,r=k
        for (let i = startColumn; i <=endColumn; i++){
           result[startRow][i] = counter;
           counter++;
        }
        // strink start row
        startRow++;

        // right loop c=k, r++
        for (let i = startRow; i <=endRow; i++) {
           result[i][endColumn] = counter;
           counter++;
        }
        // strink endcoloum
        endColumn--;

        // bottom loop r=k c--
        for (let i = endColumn; i >= startColumn; i--) {
            result[endRow][i] = counter;
            counter++;
        }
        // strink endrow
        endRow--;

        // left loop c=k r--
        for (let i = endRow; i>=startRow ; i--) {
            result[i][startColumn]=counter;
            counter++
        }
        // strink start column
        startColumn++;
    }

    return result;
}

console.log(spiralMatrix(3));


// optimized
// function spiralMatrix(n) {
//     let result = [];

//     // for (let i = 0; i <n; i++) {
//     //     result.push([]);
//     // }

//     let counter = 1;
//     let startRow=0;
//     let startColumn = 0;
//     let endColumn = n-1;
//     let endRow = n-1;

//     // box strinking;
//     while (startRow <= endRow && startColumn <= endColumn) {
        
//         // top row loop, c++,r=k
//         for (let i = startColumn; i <=endColumn; i++){
//             if(!result[startRow]) result[startRow]=[];

//            result[startRow][i] = counter;
//            counter++;
//         }
//         // strink start row
//         startRow++;

//         // right loop c=k, r++
//         for (let i = startRow; i <=endRow; i++) {
//             if(!result[i]) result[i]=[];
//            result[i][endColumn] = counter;
//            counter++;
//         }
//         // strink endcoloum
//         endColumn--;

//         // bottom loop r=k c--
//         for (let i = endColumn; i >= startColumn; i--) {
//             if(!result[endRow]) result[endRow]=[];

//             result[endRow][i] = counter;
//             counter++;
//         }
//         // strink endrow
//         endRow--;

//         // left loop c=k r--
//         for (let i = endRow; i>=startRow ; i--) {
//             if(!result[i]) result[i]=[];
//             result[i][startColumn]=counter;
//             counter++
//         }
//         // strink start column
//         startColumn++;
//     }

//     return result;
// }

// console.log(spiralMatrix(4));