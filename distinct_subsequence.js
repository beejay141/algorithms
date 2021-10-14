// Given two sequences A, B, count number of unique ways in sequence A, to form a subsequence that is identical to the sequence B.
/*
Subsequence : A subsequence of a string is a new string which is formed 
from the original string by deleting some (can be none) of the characters 
without disturbing the relative positions of the remaining characters. 
(ie, “ACE” is a subsequence of “ABCDE” while “AEC” is not).
*/

function numDistinct(A, B) {

    if (A.length < B.length) return 0;
    result = [];
    for (let i = 0; i <= B.length; i++) {
        let row = []
        for (let j = 0; j <= A.length; j++) {
            row.push(0);
        }
        result.push(row);
    }
    result[0] = result[0].map(c => 1);

    for (let i = 1; i <= B.length; i++) {
        for (let j = 1; j <= A.length; j++) {
            if (B[i - 1] == A[j - 1]) {
                result[i][j] = result[i - 1][j - 1] + result[i][j - 1];
            } else {
                result[i][j] = result[i][j - 1];
            }
        }
    }

    return result[B.length][A.length];
}