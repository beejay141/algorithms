const {swap,Compare,defaultCompare} = require('./gen');



function QuickSort(arr=[]){
    return Quick(arr,0,arr.length-1);
}

function Quick(arr=[],left,right){
  let i;
  if (arr.length > 1) {
    i = partitions(arr,left,right);

    if (left < i - 1) {
        Quick(arr, left, i - 1);
    }

    if (i < right) {
        Quick(arr, i, right);
    }
  }

  return arr;
}


function partitions(arr=[],left,right){
    const pivot = arr[Math.floor((right-left)/2)];

    let i = left;
    let j = right;

    while (i<=j) {
        while (defaultCompare(arr[i],pivot) == Compare.LESS_THAN) {
            i++;
        }

        while (defaultCompare(arr[j],pivot) == Compare.BIGGER_THAN) {
            j--;
        }

        if(i<=j){
            swap(arr, i, j);
            i++;
            j--;
        }
    }
    return i;
}

console.log(QuickSort([1,4,6,9,5,12,54,76,33,88,76,45,32,77]))