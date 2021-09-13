const Stack = require('./stack');


class Queue {

    constructor() {
        this.S1 = new Stack();
        this.S2 = new Stack();
    }

    add(item){
       this.S1.push(item);
    }


    remove(){
        while (this.S1.peek()) {
            this.S2.push(this.S1.pop())
        }

        const item = this.S2.pop();

        while (this.S2.peek()) {
            this.S1.push(this.S2.pop())
        }

        return item;
    }

    peek(){
        while (this.S1.peek()) {
            this.S2.push(this.S1.pop())
        }

        const item = this.S2.peek();

        while (this.S2.peek()) {
            this.S1.push(this.S2.pop())
        }

        return item;
    }


}