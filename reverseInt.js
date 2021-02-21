

function reserveNumber(params) {
    return parseInt(params.toString().split('').reduce((output,current)=>{
        if (output) {
            return current+output
        }
    }),0) * Math.sign(params);
}

console.log(reserveNumber(-1500500))