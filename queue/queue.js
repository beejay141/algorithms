class Queue {

    constructor(){
        this.items = [];
    }

    add(item){
       this.items.unshift(item);
    }

    pop(){
        this.items.pop();
    }

    peep(){
        return this.items[this.items.length-1];
    }
}

