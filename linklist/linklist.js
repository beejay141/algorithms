class Node{
    constructor(data,next=null){  
        this.data = data;
        this.next = next;
    }

    
}

class LinkList {
    constructor(){
        this.head = null;
    }


    Insert(data){
        this.head = new Node(data,this.head);
    }

    Size(){
        let count =0
        let node = this.head;
        while(node){
            count++;
            node = node.next;
        }
        return count;
    }

    GetFirst(){
        return this.head;
    }

    GetLast(){
        let node = this.head;
        if(!node)return node;
        while (node.next) {
            node = node.next;
        }
        return node;
    }

    Clear(){
        this.head = null;
    }

    RemoveFirst(){
        if(!this.head)return null;
        this.head = this.head.next;
    }

    RemoveLast(){
        if(!this.head)return null;
        if(!this.head.next)this.head = null;

        let node = this.head.next;
        let prev = this.head;

        while (node.next) {
            prev = node;
            node = node.next;
        }
        prev.next = null;
    }

    InserLast(data){
        let last = new Node(data);
        let curLast = this.GetLast();

        if(curLast){
            // there are some existing data in the node
            curLast.next =  last
        }else{
            // the chain is empty
            this.head = last;
        }
    }

    GetAt(index){
        // if (!this.head)null;
        let count = 0;
        let node = this.head;

        while (count < index && node) {
            node = node.next;
            count++;
        }
        return node;
    }

    RemoveAt(index){
        if(!this.head || index < 0) return null;
        
        if (index === 0){
            this.head = this.head.next;
        }

        const prev = this.GetAt(index-1);
        if (!prev || !prev.next) {
            return;
        }
        prev.next = prev.next.next;
    }

    InsertAt(index, data){
        
        if (!this.head) {
            this.head = new Node(data);
        }

        if (index <= 0) {
            let newNode = new Node(data);
            newNode.next = this.head;
            this.head = newNode;
        }

        const prev = this.GetAt(index-1) || this.GetLast();
        const node = new Node(data,prev.next);
        prev.next = node;
        
    }

    // Foreach(func)

    MidPoint(list){
        // assign head of the list to slow and fast

        // slow move one node at a time.
        let slow = list.GetFirst();
        // fast moves two nodes at a time.
        let fast = list.GetFirst();

        // while there is node next node for fast, move the slow and fast node .
        while (fast.next && fast.next.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        // return the mid node
        return slow;
    }
}


let node = new LinkList();
node.Insert(2);
node.Insert(4);
node.Insert(5);
node.Insert(8);
node.Insert(9);

console.log(node.Size())
// console.log()
console.log(node.GetAt(4))
// console.log(node.InsertAt(7,11))
// console.log("size",node.Size())
// console.log(node.GetAt(4))
// console.log(node.GetAt(3))