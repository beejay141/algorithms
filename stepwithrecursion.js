function steps(n,row=0,stair='') {
    if(row === n)
        return;

    if(stair.length === n ){
        console.log(stair);
        steps(n,row+1)
        return
    }

    if(stair.length <= row){
        stair+="#"
    }else{
        stair+=" "
    }

    steps(n,row,stair);
}


steps(5,0)