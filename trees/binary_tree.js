class Node {

    // binary tree, smaller values on the left and bigger values on the rigt
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }

    Insert(data){
        
        if (data < this.data && this.left) {
          this.left.Insert(data);
        }else if(data < this.data){
            this.left = new Node(data)
        }else if(data > this.data && this.right){
            this.right.Insert(data)
        }else if (data > this.right){
            this.right = new Node(data);
        }
    }

    Contain(data){

        if (data === this.data) {
            return data;
        }else if(data < this.data && this.left){
            return this.left.Contain(data);
        }else if(data>this.data && this.right){
            return this.right.Contain(data);
        }

        return null;
    }

    // remove(data){
    //     this.children = this.children.filter(c=>c.data !== data);
    // }

}


// write a function to validate binary tree node.
function Validate(node, min=null,max=null){
    // when max !== null node.data < max
    if (max !== null && node.data < max) return true;

    // when min !==null and node.data is greater min
    if(min !== null && node.data > min) return true;

    /**
     * chech if there is element on the left property of the node
     *   recall validate, with left as the node and min, and node.data as the max
     * (whatever is on the left should be less than the data(node.data))
     *  if true then we're fine on the left.
     */
    if (node.left && validate(node.left, min,node.data)) {
        return true;
    }

    /**
     * check if there is element on the right property of the node
     * recall validate, with right as the data, node.data as the min and max as the max.
     * i.e whatever is on the right should be greater than node.data
     * if true, then we're fine on the right.
     */
    if(node.right && Validate(node.right,node.data,max)){
        return true;
    }

    /**
     * if left and right node are validated okay, then we have a valid tree node
     */
    return false;
}


function ValidateSimple(node, min=-Infinity,max=Infinity){
    if(node === null) return true;


    if(node.data < min || node.data >= max) return false;

    let leftValidate = Validate(node.left,min,node.data)

    let rightValid = Validate(node.right,node.data,max)

    return leftValidate && rightValid;
}

const node = new Node(12);
node.Insert(6);
node.Insert(13);
node.Insert(-7);


console.log(node);