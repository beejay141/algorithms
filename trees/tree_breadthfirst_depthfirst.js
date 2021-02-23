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
        const arr = [this.root];

        while (arr.length) {
            const node = arr.shift();
            arr.push(...node.children);
            fn(node);
        }
    }

    depthFirstTraversal(fn){
        const arr = [this.root];

        while (arr.length) {
            const node = arr.shift();
            arr.unshift(...node.children);
            fn(node);
        }
    }
}