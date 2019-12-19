function Tree(){
    this.root = null;
}

Tree.prototype.draw = function(){
    this.root.visitDraw(this);
}

Tree.prototype.traverse = function(){
    this.root.visit();
}

Tree.prototype.height = function(){
    this.root.visit();
    return this.root.height(this);
}

Tree.prototype.addValues = function(val){
    var node = new Node(val);
    // console.log(val);
    // console.log(this.root == null);
    if(this.root == null){
        // console.log(val);
        this.root = node;   
    }
    else{
        // console.log(val);
        this.root.addNode(node);
    }
}
