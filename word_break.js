// function wordBreak1(A, B){
//     let hash = {};
//     let hh = ''
//     for(let c of B){
//         hash[c]=true;
//     }

//     for(let i = 0; i<A.length;i++){
//         for(j=1; j<= A.length-i;j++){
//             let sub = A.substr(i,j)
//             if(hash[sub]) {
//                 hh+=sub
//             }
//         }
//     }
//     return A.length == hh.length ? 1 : 0
// }

/**solution 2 */
// function wordBreak(A, B){
//     let hash = {};
//     // let result = [true];
//     for(let c of B){
//         hash[c]=true;
//     }

//     return workBreakHelper(A,hash)

// }

// function workBreakHelper(word="", dic){
//     console.log(dic)
//     let len = word.length;
//      if(len == 0) return true;

//      for(let i = 1; i <= len; i++){
//          console.log("i",i);
//          if(dic[word.substr(0,i)] && workBreakHelper(word.substr(i,len),dic)){
//             //  console.log("here")
//             return true;
//          }
//      }
//      return false;
// }
/** */

/***
 * without memoization n^m * m, O(m^2) space
 * with memoization n*m*m(for slice),  O(m^2) space
 */
function wordBreak(word="", wordBank=[], memo = {}){
    if(memo[word])return memo[word];

    if(word.length === 0) return true;

    let result = false
    for(let w of wordBank){
        if(word.indexOf(w)===0){
           let checkSuffix = wordBreak(word.slice(w.length),wordBank,memo)
           if(checkSuffix) {
               result = true;
               break;
            }
           
        }
    }

    memo[word]=result;
    return result;
}

/*** */


console.log(wordBreak("myinterviewtrainer",[ "interview", "my", "trainer" ]))
    