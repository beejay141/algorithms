// Complete the minimumBribes function below.
function minimumBribes(q) {
    let swaps = 0;
    
    for(let i = q.length-1; i>=0;i--)   {
        // if i is not in it's position
        if(q[i] !== i+1){
        //   is it displaced by 1
          if(i-1 >= 0 && q[i-1] === i+1){
            swaps++
            Swap(i,i-1,q);
          }
          else if(i-2>=0 && q[i-2] === i+1){
            //   is it dispaced by 2
            swaps+=2
            Swap(i-1,i-2,q);
            Swap(i,i-1,q);
           }else{
            //    if more than two, it's chaotic
            console.log("Too chaotic")
            return
        }
        }
    }
    console.log(swaps);
}

function Swap(i,j,q){
    const temp = q[i];
    q[i]=q[j];
    q[j] = temp;
}