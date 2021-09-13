
// n^2
function bubbe_sort(arr){
    for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < (arr.length-i-1); j++) {
                
                if (arr[j] > arr[j+1]) {
                    let temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1]=temp;
                }
            }
    }
    return arr;
}

//prove me wrong algo
function selection_sort(arr){
    
    for (let i = 0; i < arr.length; i++) {
        //assume index of min to be i
        let minIndex=i;
        //try to find lowest element from i+1
        for (let j = i+1; j < array.length; j++) {
        // if j element is lesser that element at min
          if (arr[j] < arr[minIndex]) {
              minIndex = j; // update the current min index.
          }
        }

        // if element i is not the lowest, swap with the lowest in the list
        if (minIndex !== i) {
            let temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp;
        }
    }
    return arr;
}


function mergeSort(arr=[]){
    if (arr.length <= 1) {
        return arr
    }

    let center = Math.floor(arr.length/2);
    let left = arr.slice(0,center);
    let right = arr.slice(center);
    let result = merge(mergeSort(left),mergeSort(right));
    return result;
}

function merge(left,right) {
    const results = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            results.push(left.shift())
        } else{
            results.push(right.shift());
        }
        
    }

    return [...results,...left,...right];
}




console.log(bubbe_sort([4,6,12,564,21,2,5,23]))