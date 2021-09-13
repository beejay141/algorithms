function twoSumNumber(arr=[], target){
    arr = arr.sort((a,b)=>a-b);
    let leftIndex=0;
    let rightIndex= arr.length-1;

    while (leftIndex < rightIndex) {
        let sum = arr[leftIndex] + arr[rightIndex];

        if (sum == target) {
            return [arr[leftIndex], arr[rightIndex]]
        }else if(sum < target ) {
            leftIndex++;
        }else{
            rightIndex--;
        }
    }

    return [];  
}

console.log(twoSumNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 15]),17)