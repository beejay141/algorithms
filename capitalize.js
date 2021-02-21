
function capitalize(params) {
    let newpp = '';
    for (let i = 0; i < params.length; i++) {
        console.log(i,params[i-1]);
        if(i===0 || params[i-1] == " ")
        {
            newpp+= params[i].toUpperCase();   
        }else newpp+= params[i]
           
    }
    return newpp;
}

console.log(capitalize("bolaji is a good boy"))