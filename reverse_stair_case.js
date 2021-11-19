function staircase(n) {
    // Write your code here
    let row = 1;
    let stair='';
    while(row <=n){
        if(stair.length == n)
        {
            console.log(stair)
            stair = '';
            row++;
        }else if(n-stair.length <=row){
           stair+='#';
        }else{
            stair+=' ';
        }
    }
}