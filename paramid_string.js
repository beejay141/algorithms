// number of columns is equal to (n*2)-1
// number of # to be added is midpoint plus row and midpoint minus row.

function pyramid(n) {
    let numberOfColumn = (n * 2) - 1;//9
    let midpoint = Math.floor(numberOfColumn/2); //4

    for (let row = 0; row < n; row++) {
        let level = "";
        for (let col = 0; col < numberOfColumn; col++) {
            if (col>= (midpoint-row) && col<= (midpoint+row)) {
                level+= "#";
            }else{
                level+= "_";
            }
        }
        console.log(level);
    }

}


function pyramidRecursion(n,row=0,level='') {
    if(n==row) return;
    let numberOfColumn = (n * 2) - 1;//9
    let midpoint = Math.floor(numberOfColumn/2); //4

    if (level.length == numberOfColumn) {
        console.log(level);
        pyramidRecursion(n,row+1)
        return
    }

    if (level.length >= (midpoint-row) && level.length <= (midpoint+row)) {
        level+="#";
    }else{
        level+="_"
    }
    pyramidRecursion(n,row,level);
}



pyramidRecursion(6);