const {swap,Compare,defaultCompare} = require('./gen');

function selectionSort(arr=[]){
  const {length} = arr;
  
  for (let i = 0; i < length; i++) {
      let minIndex = i;

      for (let j = i; j < length-1; j++) {
          
        if (defaultCompare(arr[minIndex],arr[j]) == Compare.BIGGER_THAN) {
            minIndex = j;
        }
      }

      if (minIndex != i) {
          swap(arr,i,minIndex)
      }
  }

  return arr;

}


console.log(selectionSort([3,5,12,56,4,27,89,54,244,1]))