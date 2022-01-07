// O(n*m) + O(nlogn)
function mergeSortedArray(sortedArray){
    let set = new Set();
    
   for(let n of sortedArray){
       set = addToSet(n,set);
   }

   return mergeSort([...set])
    
}

function addToSet(arr, set){
   for(let n of arr){
       set.add(n);
   }
   return set
}

function mergeSort(arr =[]){
    
    if(arr.length <=1) return arr;
    let midpoint = Math.floor(arr.length/2);
    let leftArr = arr.slice(0,midpoint);
    let rightArr = arr.slice(midpoint);
    
    let result = merge(mergeSort(leftArr),mergeSort(rightArr))

    return result;

}

function merge(left,right){
    let result  = [];

    while (left.length && right.length) {
        if(left[0] < right[0]){
            result.push(left.shift());
        }else{
            result.push(right.shift());
        }
    }

    result.push(...left, ...right)

    return result;
}


console.log(mergeSortedArray([[1,2,3,4],[2,6,7,9],[3,5,7,8]]))