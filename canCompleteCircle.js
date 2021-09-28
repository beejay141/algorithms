// Given two integer arrays A and B of size N.

// There are N gas stations along a circular route, where the amount of gas at station i is A[i].

// You have a car with an unlimited gas tank and it costs B[i] of gas to travel from station i 

// to its next station (i+1). You begin the journey with an empty tank at one of the gas stations.

// Return the minimum starting gas station’s index if you can travel around the circuit once, otherwise return -1.

// You can only travel in one direction. i to i+1, i+2, … n-1, 0, 1, 2.. Completing the circuit means starting at i and 

// ending up at i again.
// find the minimun index to start.
function canCompleteCircuit(A, B){
    let runingGas = 0;
    let runFromStart =0;
    let minGasIndex = 0;
    
    for(let i=0;i < A.length;i++){
       const fuelNeeded = A[i]-B[i];
    //    keep track of the total gas;
       runingGas+= fuelNeeded;
    //    keep track of the gas gain/usage from the potential starting point.
       runFromStart+=fuelNeeded;

    //    if the gas becomes < 0 at any point. means the start index is at least i+1;
       if(runFromStart < 0){
           runFromStart = 0;
           minGasIndex = i+1;
       }
       
    }

    return runingGas < 0 ? -1 : minGasIndex;
}