function SlowSnail(depth) {
    if(depth<=7) return 1;

    let minDays = Math.floor(depth/5);
    let remainingFloor = depth%5;
    if(remainingFloor>2)
        return minDays+1;
    else
       return minDays;
}