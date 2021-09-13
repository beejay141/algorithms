class Stack {

    constructor(){
        this.items = [];
    }

    push(item){
       this.items.push(item);
    }

    pop(){
        this.items.pop();
    }

    peep(){
        return this.items[this.items.length-1];
    }
}

