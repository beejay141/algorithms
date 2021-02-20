function jj(A = [], B = [], P = "") {
    let phones = B.filter(c => c.includes(p));
    if (phones.length) {
        let names = [];
        phones.forEach(e => {
            names.push(A[B.indexOf(e)]);
        });
        return names.sort().shift();
    }
    return "NO CONTACT";

}


function solve(S) {
    while (S.includes("-") || S.includes(" ")) {
        S = S.replace(" ", "").replace("-", "");
    }
    const length = S.length;
    if (length <= 3) {
        return S;
    } else if (S == 4) {
        return `${S.substr(0,2)}-${S.substr(2)}`;
    } else {
        let result = "";
        let mod = length % 3;
        let divisorLength = length - mod;
        if (mod == 1) {
            divisorLength -= 3;
            mod += 3;
        }

        let counter = 0;
        console.log(divisorLength);
        while (counter < divisorLength) {
            result += S.substr(counter, 3);
            counter += 3;
            console.log("count", counter);
            if (counter !== divisorLength) {
                result += "-";
            }
            console.log("count2", counter);


        }

        if (mod == 4) {
            result += `-${S.substr(counter,2)}-${S.substr(counter+2)}`
        } else if (mod > 0) {
            result += `-${S.substr(counter)}`;
        }

        return result;
    }


}

const dArray = [];

function solution(T = [], R=[]) {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
    }
}


console.log("ans",solution([2, 1, 5, 3, 4]));