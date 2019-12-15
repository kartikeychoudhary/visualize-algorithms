function Node(val){
    this.value = val;
    this.right = null;
    this.left = null;
}

Node.prototype.visit = function(){
    if(this.left!=null){
        this.left.visit();
    }
    console.log(this.value);

    if(this.right!=null){
        this.right.visit();
    }
}

Node.prototype.addNode = function(node){
    
    if(node.value < this.value){
        if(this.left == null){
            this.left = node;
        }else{
            this.left.addNode(node);
        }
    }else if(node.value > this.value){
        if(this.right == null){
            this.right = node;
        } else {
            this.right.addNode(node);
        }

    }
}