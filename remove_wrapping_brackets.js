function removeWrappingBrackets(word = "") {
    let result = word;
    let stack = [];
    let done = false;

    while (!done && result.length) {
        if (result.startsWith("(") && result.endsWith(")")) {
            result = result.substr(1, result.length - 2);
        } else if("()".includes(result[0]) || "()".includes(result[result.length-1])){
            return word;
        }else {
            for (let w of result) {
                if ("()".includes(w)) {
                    if (w == ")" && !stack.length) return word;
                    else if (w === ")") {
                        stack.pop();
                    } else {
                        stack.push(w);
                    }
                }
            }
            done = true;
        }
    }
    
    return stack.length ? word : result;
}

console.log(removeWrappingBrackets("(((0()))))"))