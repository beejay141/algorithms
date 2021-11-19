function miniMaxSum(arr) {
    // Write your code here
   let sorted = arr.sort((a,b)=>a-b);
   let min = sorted.reduce((sum,value,idx)=>{
       if(idx == sorted.length-1) return sum;
       return sum+value
   })
   let max = sorted.reduce((sum,value,idx)=>{
       console.log(idx)
       if(idx == 0) return sum;
       return sum+value
   })
   
   console.log(min,max)
}


miniMaxSum([1,2,3,4,5])