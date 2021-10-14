const {
    defaultCompare,
    Compare
} = require('./gen');


function MergeSort(arr = []) {
    if (arr.length <= 1) return arr;

    const { length } = arr;

    let middle = Math.floor(length-1 / 2);

    let left = MergeSort(arr.slice(0, middle));
    let right = MergeSort(arr.slice(middle, length));

    arr = Merge(left, right);
    return arr;
}

function Merge(left = [], right = []) {
    let i = 0;
    let j = 0;
    let result = [];

    while (i < left.length && j < right.length) {
        result.push(defaultCompare(left[i], right[j]) == Compare.LESS_THAN ? left[i++] : right[j++]);
    }
    return result.concat(i < left.length ? left.slice(i) : right.slice(j));
}

console.log(MergeSort([1, 4, 6, 9, 5, 12, 54, 76, 33, 88, 76, 45, 32, 77]))

console.log((3, 0) / 2)