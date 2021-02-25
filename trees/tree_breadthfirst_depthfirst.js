class Node {
    constructor(data){
        this.data;
        this.children = [];
    }

    Add(data){
        this.children.push(new Node(data));
    }

    remove(data){
        this.children = this.children.filter(c=>c.data !== data);
    }
}

class Tree{
    constructor(){
        this.root = null;
    }

    breathFirstTraversal(fn){
        // take the start of the node and add to a empty array
        const arr = [this.root];

        //while the counter array is not empty, push children of the [0] back to the array.
        while (arr.length) {
            const node = arr.shift();
            arr.push(...node.children);
            fn(node);
        }
    }

    depthFirstTraversal(fn){
        // take the start of the node and add to a empty array
        const arr = [this.root];

        //while the counter array is not empty, push children of the [0] to the front of the array.
        while (arr.length) {
            const node = arr.shift();
            arr.unshift(...node.children);
            fn(node);
        }
    }
}