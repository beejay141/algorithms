/**
 * palindrome is a string that is equal to origin string if reversed
 */

 function palindrome(str) {
    const resversed = str.split('').reduce((rev,curr)=>curr + rev);
    return resversed === str;
 }

 console.log("result",palindrome("abba"))