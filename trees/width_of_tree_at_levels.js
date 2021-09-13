/*
write a function the return array of a tree level with

*/

class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    Add(data) {
        this.children.push(new Node(data));
    }

    remove(data) {
        this.children = this.children.filter(c => c.data !== data);
    }
}

function levelWidth(root) {
    const queue = [root,'s']; // breadth first queue

    const widths = [0]; // return array

    while (queue.length > 1) {
        const node = queue.shift(); // remove and return first element of the queue

        if (node === 's') { // s denote end of each level

            queue.push('s');

            widths.push(0); // push counter for the next level into the result array
        }else{ 
            // where not at the end of the (level) chiildren of the last level

            queue.push(...node.children); // push the children of the current node to the end of the queue

            widths[widths.length-1]++; // increament the current level counter
        }
    }
    return widths;
}