const {swap,Compare,defaultCompare} = require('./gen');


function InsertionSort(arr=[]){
    const {length} = arr;

    let temp;
    for (let i = 1; i < length; i++) {
        temp = arr[i];
        let j=i;
        while (j>0 && defaultCompare(arr[j-1],temp ) == Compare.BIGGER_THAN ) {
            arr[j] = arr[j-1];
            j--;
        }
        arr[j]=temp;
    }

    return arr;

}

console.log(InsertionSort([2,67,87,3,6,32,12]))