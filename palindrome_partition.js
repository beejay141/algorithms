function minCut(A){
    let top = null;
    let palin = [];
    for(let i=1;i<A.length;i++){
       let isEven = nextPalindrome(i-1,i,A);
       let isOdd = nextPalindrome(i-1,i+1,A);
       let pp = isOdd[1]-isOdd[0] > isEven[1]-isEven[0]? isOdd : isEven
       if(!top){
        palin.push(pp)
        top=pp;
       }
       else if(pp[0] <= top[0] && pp[1]>=top[1]){
           console.log("here",top)
           palin.pop();
           palin.push(pp);
           top = pp;
       }else if(pp[0] >= top[1]){
           palin.push(pp)
           top=pp;
       }
       
    }
    console.log(palin)
    let j = palin.length - 1;
    return j;
}

function nextPalindrome(leftIdx,rightIdx,A){
    while(leftIdx>=0 && rightIdx<A.length && A[leftIdx] == A[rightIdx]){
        leftIdx--;
        rightIdx++;
    }
    leftIdx++
    return [leftIdx,rightIdx];
}

console.log(minCut("abba"))