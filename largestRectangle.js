/*we have to use concept of next greater elem. but what we'll be doing is next small element*/
function findLargestRectangleInHistogram(row = []) {
    let maxArea = 0;

    let i = 0;
    let columns = row.length;
    let stack = [];

    while (i < columns) {
        /*push to stack if the current is taller than the previous. else we've reach the left 
        boundry if the current is shorter _-|-_*/
        if (stack.length === 0 || row[stack[stack.length - 1]] <= row[i]) {
            stack.push(i);
            i++;
        } else {
            /*if we've seen the right boundry 'i' , the left boundry will be the element before
            it on the stack*/
            let top = row[stack[stack.length - 1]];
            stack.pop();
            //incase stack is empty. it means top span through 'i'.
            let area = top * i;
            if (stack.length) {
                /* width = curr index - (index before top in the stack) -1  reason for -1 is
                because curr index is not path of the width. need to subtract it;s extral added*/
                area = top * (i - stack[stack.length - 1] - 1);
            }
            maxArea = Math.max(area, maxArea);
        }

    }

    // we need to treat the possible remaining indexes in the stack
    while (stack.length) {
        let top = row[stack[stack.length - 1]];
        stack.pop();

        let area = top * i;
        if (stack.length > 0) {
            area = top * (i - stack[stack.length - 1] - 1);
        }
        maxArea = Math.max(area, maxArea);
    }

    return maxArea;
}


function findLargestRectangleIn2DMatrix(A){
    // initialize maxArea with maxArea of first row.
    let maxArea = this.getArea(A[0]);

    // start loop from index 1.
    for(let r=1;r<A.length;r++){
        for(let c=0;c < A[0].length;c++){
            // if elem is 1, update it's histogram value.
            if(A[r][c] == 1){
                A[r][c]+=A[r-1][c];
            }
        }
     let area = this.getArea(A[r]);
      maxArea = Math.max(area,maxArea);
    }
    
    return maxArea;
}