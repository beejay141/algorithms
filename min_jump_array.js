/**
 * Given an array of non-negative integers, A, of length N, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Return the minimum number of jumps required to reach the last index.
 */
//O(n^2)
function jump(A) {

    if (!A.length || A[0] == 0) return -1;

    let result = [];

    // min jump to idx zero is 0;
    result[0] = 0;

    // Find the minimum number of
    // jumps to reach arr[i]
    // from arr[0], and assign
    // this value to jumps[i]
    for (let i = 1; i < A.length; i++) {
        result[i] = Infinity;
        for (let j = 0; j < i; j++) {
            if (i <= j + A[j] && result[j] != Infinity) {
                result[i] = Math.min(result[i], result[j] + 1)
            }
        }
    }

    return result[A.length - 1]
}


