class Queue {
    constructor() {
        this.items = [];
    }

    add(item) {
        this.items.unshift(item);
    }

    remove() {
        this.items.pop();
    }

    peep() {
        return this.items[this.items.length - 1];
    }
}

module.exports = Queue