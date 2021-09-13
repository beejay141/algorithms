const Queue = require('./queue');

function Weave(Q1,Q2) {
    const Q3 = new Queue();

    while (Q1.peek() || Q2.peek()) {
        
        if (Q1.peek()) {
            Q3.add(Q1.pop())
        }

        if (Q2.peek()) {
            Q3.add(Q2.pop())
        }
    }

    return Q3;
}