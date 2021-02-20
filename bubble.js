const {swap,Compare,defaultCompare} = require('./gen');

function bubbleSort(arr=[]){
    const {length} = arr;

    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length-1-i; j++) {
            if (defaultCompare(arr[j],arr[j+1]) == Compare.BIGGER_THAN) {
                swap(arr,j,j+1);
            }
        }
    }

    return arr;

}


let sorted = bubbleSort([2,3,6,4,8,9,12,65,32,1]);
console.log(sorted);