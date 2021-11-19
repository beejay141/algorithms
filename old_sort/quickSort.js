function quickSort(array) {
    // Write your code here.
    quickSortHelper(array, 0, array.length - 1)
    return array
}

// helper for recursion
function quickSortHelper(array, startIdx, endIdx) {
    /*base is if the arr len is 1 just return*/
    if (startIdx >= endIdx) return;

    /*you can choose pivot ram or just use idx 1*/
    let pivot = startIdx;
    let leftIdx = startIdx + 1;
    let rightIdx = endIdx;

    while (rightIdx >= leftIdx) {
        if (array[leftIdx] > array[pivot] && array[rightIdx] < array[pivot]) {
            swap(leftIdx, rightIdx, array);
        }

        if (array[leftIdx] <= array[pivot]) leftIdx++;

        if (array[rightIdx] >= array[pivot]) rightIdx--;
    }
    
    swap(rightIdx, pivot, array)
    /*pivot is swapped with right index. -1 P +1*/
    const leftSmaller = rightIdx - 1 - startIdx < endIdx - (rightIdx + 1)
    if (leftSmaller) {
        quickSortHelper(array, startIdx, rightIdx - 1)
        quickSortHelper(array, rightIdx + 1, endIdx)
    } else {
        quickSortHelper(array, rightIdx + 1, endIdx)
        quickSortHelper(array, startIdx, rightIdx - 1)
    }

}

function swap(i, j, array) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp
}

console.log(quickSort([1, 4, 6, 9, 5, 12, 54, 76, 33, 88, 76, 45, 32, 77]))